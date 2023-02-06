const express = require('express');
const cors = require('cors');
const app = express();
import memberModel from "../models/member.js";
const router = express.Router();

app.use(cors());
app.use(express.json());

var user = {

};
router.get('/me', (req, res) => {
  return res.json({
    data: {
      user
    }
  });
});

// router.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   console.log("");
//   // query db.
//   if (email === 'admin@admin.com' && password === '123456') {
//     return res.json({
//       data: {
//         user,
//         token: 'THIS_IS_TOKEN'
//       }
//     });
//   } else {
//     return res.status(401).json({
//       message: 'Invalid Password'
//     });
//   }
// });

router.post('/login', function (req, res,) {
  const { email, password } = req.body;
  memberModel.getLogin(email, password, (err, data) => {
    var result = JSON.parse(JSON.stringify(data))

    user = result
    res.status(200).json(data);
  });
})

app.use(router);

module.exports = {
  path: '/api',
  handler: app
};

export default router
