const{DoctorLogin} = require('./DoctorLogin');
const{Dashboard} = require('./Dashboard');

class PageObjectMO{

constructor(page){

    this.page = page;
    this.doctorLogin = new DoctorLogin(this.page);
    this.dashBoard = new Dashboard(this.page);



}
getLoginpage(){

    return this.doctorLogin;
}

getDashboardPage(){

    return this.dashBoard;
}

}

module.exports = {PageObjectMO};