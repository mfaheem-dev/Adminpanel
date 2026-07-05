const express = require("express");
const router = express.Router();


const {
  addEmployee,
  getByType,
  deleteEmployee,
  updateEmployee,
  acceptEmployee,
  rejectEmployee,
  getNotifications,
  readNotification,
} = require("../controllers/EmployeesControl");



router.post("/add",addEmployee);

router.get("/type/:type",getByType);

router.delete("/:id",deleteEmployee);

router.put("/:id",updateEmployee);
router.put("/accept/:id", acceptEmployee);

router.put("/reject/:id", rejectEmployee);

router.get("/notifications", getNotifications);

router.put("/notification/:id", readNotification);


module.exports = router;