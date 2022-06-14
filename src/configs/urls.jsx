const host = "43.248.186.196";
const port = '8088'

export const urls = {
    userLoginUrl :'http://'+host+':'+port+'/api/user/login',
    userRegisterUrl :'http://'+host+':'+port+'/api/user/register',
    userGetOptionLogUrl:'http://'+host+':'+port+'/api/user/getOptionLog',
    getAllParksUrl:'http://'+host+':'+port+'/api/parkingSpace/getAll',
    getPrivateParkingSpaceUrl:'http://'+host+':'+port+'/api/parkingSpace/getByUser',
    rentApply:'http://'+host+':'+port+'/api/user/rent',
    adminLoginUrl:'http://'+host+':'+port+'/api/admin/login',
    adminAddAdminUrl:'http://'+host+':'+port+'/api/admin/addAdmin',
    adminAdmitRentApplyUrl:'http://'+host+':'+port+'/api/admin/admit',
    adminGetAllRentApplyUrl:'http://'+host+':'+port+'/api/admin/getAllRentApply',
    adminRefuseApplyUrl:'http://'+host+':'+port+'/api/admin/refuse',
    adminGetAllOptionLogUrl:'http://'+host+':'+port+'/api/admin/getAllOptionLog',
    adminUpdateParkingSpaceUrl:'http://'+host+':'+port+'/api/parkingSpace/update'
}
