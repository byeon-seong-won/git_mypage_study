const express = require('express');
const router = express();

// http://localhost:4000으로 접속시 응답메시지 출력
router.get('/test', (req,res) => {
    res.send({test : "Cooooool"})
})

module.exports = router;