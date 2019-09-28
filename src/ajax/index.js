import Ajax from './ajax'
import Jsonp from 'jsonp'
import ajax from './ajax';
export const reqLogin=(username,password)=>Ajax('/login',{username,password},'POST')

export const reqWeather=(city)=>{
    const url =
`http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p4
9MVra6urFRGOT9s8UBWr2`
    return new Promise((resolve,reject)=>{
        Jsonp(url,{param:'callback'},(error,response)=>{
            if(!error && response.status==='success'){
                const {dayPictureUrl,weather}=response.results[0].weather_data[0]
                resolve({dayPictureUrl,weather})
            }else{
                alert('获取天气信息失败')
            }      })
    })
}
//获取一级或某个二级分类
export const reqCategorys=(parentId)=>ajax('/manage/category/list',{parentId})
export const reqAddCategory=(parentId,categoryName)=>ajax('/manage/category/add',{
    parentId,
    categoryName
    }, 'POST')
// 更新品类名称
export const reqUpdateCategory = ({categoryId, categoryName}) =>
ajax('/manage/category/update', {
categoryId,
categoryName
}, 'POST')