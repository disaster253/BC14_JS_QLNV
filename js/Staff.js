// Đối tượng nhân viên bao gồm các thuộc tính sau:
// +Tài khoản
// +Họ tên
// +Email
// +Mật khẩu
// +Ngày làm
// +Lương cơ bản
// +Chức vụ gồm: Giám đốc, Trưởng Phòng, Nhân Viên
// +Giờ làm trong tháng
// +Tổng lương
// +Loại nhân viên
function Staff(account, fullName, email, password, date, salary, position, workingHours) {
	this.account = account,
		this.fullName = fullName,
		this.email = email,
		this.password = password,
		this.date = date,
		this.salary = salary,
		this.position = position,
		this.workingHours = workingHours,
		this.totalSalary,
		this.staffClassify
};
// Tính lương
// +nếu chức vụ là giám đốc: tổng lương = lương cơ bản * 3
// +nếu chức vụ là trưởng phòng: tổng lương = lương cơ bản * 2
// +nếu chức vụ là nhân viên: tổng lương = lương cơ bản *
Staff.prototype.calTotalSalary = function () {
	var position1 = "Sếp";
	var position2 = "Trưởng phòng";
	var position3 = "Nhân viên";
	if (this.position === position1) {
		this.totalSalary = (this.salary * 3).toFixed(2);
	} else if (this.position === position2) {
		this.totalSalary = (this.salary * 2).toFixed(2);
	} else {
		this.totalSalary = (this.salary).toFixed(2);
	}
}
// Xếp loại nhân viên
// +nếu nhân viên có giờ làm trên 192h (>=192): nhân viên xuất sắc
// +nếu nhân viên có giờ làm trên 176h (>=176): nhân viên giỏi
// +nếu nhân viên có giờ làm trên 160h (>=160): nhân viên khá
// +nếu nhân viên có giờ làm dưới 160h: nhân viên trung bình
Staff.prototype.staffAssessment = function () {
	var assessment1 = "Xuất sắc";
	var assessment2 = "Giỏi";
	var assessment3 = "Khá";
	var assessment4 = "Trung bình"
	if (this.workingHours >= 192) {
		this.staffClassify = assessment1;
	} else if (this.workingHours >= 176) {
		this.staffClassify = assessment2;
	} else if (this.workingHours >= 160) {
		this.staffClassify = assessment3;
	} else {
		this.staffClassify = assessment4;
	}
}