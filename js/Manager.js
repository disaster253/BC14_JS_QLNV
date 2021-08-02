function Manager() {
	this.listStaff = JSON.parse(localStorage.getItem("listStaff")) || [];
}
Manager.prototype.init = function () {
	if (this.listStaff === []) {
		return;
	}
	this.listStaff = this.listStaff.map(function (staff) {
		var newStaff = new Staff(
			staff.account,
			staff.fullName,
			staff.email,
			staff.password,
			staff.date,
			staff.salary,
			staff.position,
			staff.workingHours
		)
		newStaff.calTotalSalary();
		newStaff.staffAssessment();
		return newStaff;
	})
}

Manager.prototype.saveLocalStorage = function () {
	localStorage.setItem("listStaff", JSON.stringify(this.listStaff));
}

Manager.prototype.addStaff = function (staff) {
	staff.calTotalSalary();
	staff.staffAssessment();
	this.listStaff.push(staff);
	this.saveLocalStorage();
}

Manager.prototype.removeStaff = function (account) {
	this.listStaff = this.listStaff.filter(function (staff) {
		return staff.account !== account;
	})
	this.saveLocalStorage();
}

Manager.prototype.updateStaff = function (staff) {
	this.listStaff = this.listStaff.map(function (sff) {
		if (sff.account !== staff.account) {
			return sff;
		}
		return staff;
	});
	this.saveLocalStorage();
}

Manager.prototype.calTotalSalary = function () {
	for (var staff of this.listStaff) {
		staff.calTotalSalary();
	}
}

Manager.prototype.staffAssessment = function () {
	for (var staff of this.listStaff) {
		staff.staffAssessment();
	}
}

Manager.prototype.findStaff = function (staffClassify) {
	var temp = this.listStaff.filter(function (staff, index) {
		staffClassify = staffClassify.trim().toLowerCase();
		var classifyStaff = staff.staffClassify.toLowerCase().trim();
		return classifyStaff.includes(staffClassify);
	})
	return temp;
}