import VeeValidate,{ Validator } from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';

Validator.extend('dateValid', {
  messages: {
    zh_CN: field => '请输入正确的日期信息'
  },
  validate: value => {
    return /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(value)
  }
})




var zh_Config = {
   zh_CN: {
      name: {
        required: ( field )=> "请输入" + field
      },
      sex: {
        required: ( field )=> "请选择" + field
      },
      birthday: {
        required: ( field )=> "请输入" + field
      },
      live: {
        required: ( field )=> "请输入" + field
      },

      owner:{
        required: ( field )=> "请选择" + field
      },
      validate: value => {
        return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value) || /^(\d{3}-)(\d{8})$|^(\d{4}-)(\d{7})$|^(\d{4}-)(\d{8})$/.test(value)
      },
      attributes:{
      	name: '姓名',
        sex:'性别',
        birthday:'出生日期',
        live: '现居地',
        owner: '问卷填写人'

      }
  }
};

Validator.localize('zh_CN', zh_CN);

Validator.updateDictionary(zh_Config);


export default VeeValidate;