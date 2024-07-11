const errorHandler = (err, req, res, next) => {
    let statusCode = 500;
    let errors = [];

    switch (err.name) {
        case 'SequelizeUniqueConstraintError':
        case 'SequelizeValidationError':
            err.errors.forEach(err => {
                errors.push(err.message);
            });
            statusCode = 400;
            break;
        case 'JsonWebTokenError':
            errors.push('User not authenticated');
            statusCode = 401;
            break
        default:
            errors.push(err.message);
            statusCode = err.statusCode || 500
            break;
    }
}

module.exports = errorHandler