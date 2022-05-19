
{ title: '非空'; value: '*'; pattern: /^.+$/ };
{ title: '6到16位数字'; value: 'n6-16'; pattern: /^\d{6,16}$/ };
{ title: '6到16位任意字符'; value: '*6-16'; pattern: /^.{6,16}$/ };
{ title: '6到18位字母'; value: 's6-18'; pattern: /^[a-z|A-Z]{6,18}$/ };
{ title: '网址'; value: 'url'; pattern: /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/ };
{ title: '电子邮件'; value: 'e'; pattern: /^([\w]+\.*)([\w]+)@[\w]+\.\w{3}(\.\w{2}|)$/ };
{ title: '手机号码'; value: 'm'; pattern: /^1[3456789]\d{9}$/ };
{ title: '邮政编码'; value: 'p'; pattern: /^[1-9]\d{5}$/ };
{ title: '字母'; value: 's'; pattern: /^[A-Z|a-z]+$/ };
{ title: '数字'; value: 'n'; pattern: /^-?\d+(\.?\d+|\d?)$/ };
{ title: '整数'; value: 'z'; pattern: /^-?\d+$/ };
{ title: '金额'; value: 'money'; pattern: /^(([1-9][0-9]*)|([0]\.\d{0,2}|[1-9][0-9]*\.\d{0,2}))$/ };
