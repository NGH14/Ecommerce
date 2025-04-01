
class AccessController {
  
  signup = async (req,res,next) =>{
    try {
      console.log(`[P]::signup::`, req.body)
      return res.status(201).json({
        code: "20001",
        userAgent: req.headers['user-agent']
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AccessController();