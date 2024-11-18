const notFound = (req, res, next) =>{
    const error = new Error(`Not found -${req.orginalUrl}`)
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) =>{
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // check for mongoose bad ObjectId
    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        message = `Resource not found`
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? "Good": err.stack,
    })
}

export { notFound, errorHandler };


//     Express ทำงานตามลำดับของ middleware ที่กำหนดในโค้ด
// มี 2 ประเภทของ middleware:
// 1) Regular middleware: จัดการ request ปกติ (เช่น app.get() หรือ notFound)
// 2) Error-handling middleware: จัดการ error โดยเฉพาะ (ต้องมีพารามิเตอร์ 4 ตัว err, req, res, next)
