const { User, Role, Permission, UserRole, UserPermission } = require('../../models'); // Pastikan path ini benar sesuai dengan struktur proyek Anda

const bcrypt = require('bcryptjs');

class UserService {
  static async createUser(data) {
    try {
      const { email, password, phoneNumber, name, avatar, clinicId, roleIds, permissionIds } = data;

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Create user
      const user = await User.create({
        email,
        password: hashedPassword,
        phoneNumber,
        name,
        avatar,
        clinicId
      });

      // Assign roles
      if (roleIds && roleIds.length > 0) {
        for (let roleId of roleIds) {
          await UserRole.create({ userId: user.id, roleId });
        }
      }

      // Assign permissions
      if (permissionIds && permissionIds.length > 0) {
        for (let permissionId of permissionIds) {
          await UserPermission.create({ userId: user.id, permissionId });
        }
      }

      return user;
    } catch (error) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  static async getUserById(userId) {
    try {
      const user = await User.findOne({
        where: { id: userId },
        include: [
          {
            model: Role,
            as: 'roles',
            through: { attributes: [] },
            include: [
              {
                model: Permission,
                as: 'permissions', // Sesuaikan dengan alias yang didefinisikan dalam model Role
                through: { attributes: [] },
              },
            ],
          },
        ],
      });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      return user;
    } catch (error) {
      throw new Error(`Error fetching user: ${error.message}`);
    }
  }
  
  

  static async updateUser(userId, data) {
    try {
      const { email, password, phoneNumber, name, avatar, clinicId, roleIds, permissionIds } = data;

      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error('User not found');
      }

      // Update user details
      user.email = email || user.email;
      user.password = password ? await bcrypt.hash(password, 10) : user.password;
      user.phoneNumber = phoneNumber || user.phoneNumber;
      user.name = name || user.name;
      user.avatar = avatar || user.avatar;
      user.clinicId = clinicId || user.clinicId;

      await user.save();

      // Update roles
      if (roleIds && roleIds.length > 0) {
        await UserRole.destroy({ where: { userId: user.id } });
        for (let roleId of roleIds) {
          await UserRole.create({ userId: user.id, roleId });
        }
      }

      // Update permissions
      if (permissionIds && permissionIds.length > 0) {
        await UserPermission.destroy({ where: { userId: user.id } });
        for (let permissionId of permissionIds) {
          await UserPermission.create({ userId: user.id, permissionId });
        }
      }

      return user;
    } catch (error) {
      throw new Error(`Error updating user: ${error.message}`);
    }
  }

  static async deleteUser(userId) {
    try {
      const user = await User.findByPk(userId);

      if (!user) {
        throw new Error('User not found');
      }

      await user.destroy();

      return { message: 'User deleted successfully' };
    } catch (error) {
      throw new Error(`Error deleting user: ${error.message}`);
    }
  }
}

module.exports = UserService;
