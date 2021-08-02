// + Tài khoản tối đa 4 - 6 ký số, không để trống
// + Tên nhân viên phải là chữ, không để trống
// + Email phải đúng định dạng, không để trống
// + mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt), không 
// để trống
// + Ngày làm không để trống, định dạng mm/dd/yyyy
// + Lương cơ bản 1 000 000 - 20 000 000, không để trống
// + Chức vụ phải chọn chức vụ hợp lệ (Giám đốc, Trưởng Phòng, Nhân Viên)
// + Số giờ làm trong tháng 80 - 200 giờ, không để trống
function Validator() {
	this.errors = {};
}

Validator.prototype.isRequired = function (name, value) {
	if (!value) {
		this.errors[name] = "Vui lòng không để trống!!!";
		return false;
	}
	return true;
}
//account check
Validator.prototype.accountCheck = function (name, value) {
	if (!/^[0-9].{5,9}$/.test(value)) {
		this.errors[name] = "Tài khoản tối đa 4 - 6 ký số, không để trống";
		return false;
	}
	return true;
}
//fullName check
Validator.prototype.fullNameCheck = function (name, value) {
	if (!/[a-zA-Z]$/.test(value)) {
		this.errors[name] = "Tên nhân viên phải là chữ, không để trống";
		return false;
	}
	return true;
}
//email check
Validator.prototype.emailCheck = function (name, value) {
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
		this.errors[name] = "Email phải đúng định dạng, không để trống"
	}
}
//password check
Validator.prototype.passwordCheck = function (name, value) {
	if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{6,10}$/.test(value)) {
		this.errors[name] = "mật Khẩu từ 6-10 ký tự, 1 chữ số, 1 ký tự in hoa, 1 ký tự đặc biệt";
		return false;
	}
	return true;
}
//salary check
Validator.prototype.salaryCheck = function (name, value) {
	if (/^[0-9]*$/.test(value) && value > 20000000) {
		this.errors[name] = "Lương cơ bản 1 000 000 - 20 000 000, không để trống";
		return false;
	}
	if (/^[0-9]*$/.test(value) && value < 1000000) {
		this.errors[name] = "Lương cơ bản 1 000 000 - 20 000 000, không để trống";
		return false;
	}
	return true;
};

//work hour check
Validator.prototype.workHoursCheck = function (name, value) {
	if (/^[0-9]*$/.test(value) && value > 200) {
		this.errors[name] = "Nhập giờ làm từ 80 đến 200, không để trống";
		return false;
	}
	if (/^[0-9]*$/.test(value) && value < 80) {
		this.errors[name] = "Nhập giờ làm từ 80 đến 200, không để trống";
		return false;
	}
	return true;
};