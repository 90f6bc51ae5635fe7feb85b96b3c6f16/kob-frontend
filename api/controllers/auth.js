const express = require('express');
const cors = require('cors');
const app = express();
import memberModel from "../models/member.js";
const router = express.Router();

app.use(cors());
app.use(express.json());

var user = {
  data: "",
};
router.get('/me', (req, res) => {

  console.log("auth =>>  me");

  return res.json({
    data: {
      customer_code: '0016218',
      customer_register_code: '99894677',
      customer_type_code: 'CT-2022001',
      customer_zone_type_code: 'pos',
      customer_prefix: '',
      customer_name: 'ทวี สิงห์สกล',
      customer_full_name: 'ทวี สิงห์สกล',
      customer_branch: '',
      customer_tax: '',
      customer_tel: '0998769136',
      customer_phone: null,
      customer_fax: '01421',
      customer_email: '',
      customer_address: 'เลขที่ 96 ม.14 บ.โนนสูง ต.ทัพรั้ง อ.พระทองคำ จ.นครราชสีมา 30220',
      customer_zipcode: '',
      customer_vat_type: 'inc',
      customer_vat_value: 7,
      customer_profile_image: null,
      customer_credit_day: 0,
      customer_condition_pay: '',
      points_balance: 8,
      account_code: '',
      customer_username: 'revelsoft',
      customer_password: '123456',
      customer_point_lock: 0,
      customer_line: 'Santisook.s',
      customer_line_id: 'U14a8532b702efa0eb159b02f4b62d623',
      customer_line_name: 'Santisook.s',
      customer_line_picture: 'https://profile.line-scdn.net/0hHQvnKklRF35bF',
      addby: 'GSE20240019',
      adddate: '2025-08-15T07:46:44.000Z',
      updateby: null,
      lastupdate: null
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

  console.log("auth =>>  login");
  const { email, password } = req.body;
  memberModel.getLogin(email, password, (err, data) => {
    var result = JSON.parse(JSON.stringify(data))
    console.log('result ++>> login', result);
    user = result[0]
    res.status(200).json(data);
  });
})

app.use(router);

module.exports = {
  path: '/api',
  handler: app
};

export default router
