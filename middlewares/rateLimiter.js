import rateLimit from "express-rate-limit";

export const rateLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 10 minutes
  max: 5, // limit each IP to 100 requests per windowMs
  message: function (req, res, next) {
    const remainingTime = Math.ceil(
      (req.rateLimit.resetTime - Date.now()) / 1000
    );
    return res.status(429).json({
      message: `Too many requests from this IP, please try again in ${remainingTime} seconds`,
    });
  },
});
