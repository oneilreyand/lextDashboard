const authMiddleware = async (req, res, next) => {
    try {
      const token = req.header('Authorization');
      const result = await verifyToken(token);
  
      if (!result.valid) {
        return res.status(401).json({ message: result.message });
      }
  
      if (result.newToken) {
        res.setHeader('x-new-token', result.newToken);
      }
  
      // Attach user to request
      req.user = result.user;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Please authenticate.' });
    }
  };
  