import React from 'react';
import {Form, Button, Checkbox, DatePicker, Input, Select} from 'antd';
import 'antd/dist/antd.css';
// import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={{}} />
        </div>
    
      <Form 
         autoComplete='off'
         labelCol={{span: 5}} 
         wrapperCol={{span:14}}
         onFinish={(values)=>{
          console.log({values})
        }}
        onFinishFailed={(error)=>{
          console.log({error})
        }}
        >

       <Form.Item name="fullName"
                  label="Անունը" 
                  rules={[
                    {
                      required:true,
                      message: 'խնդրում եմ մուտքագրեք ձեր անունը',
                    },
                    {whitespace: true},
                    {min:3},
                  ]}
                  hasFeedback>
       <Input placeholder='Գրիր քո անունը'/>
       </Form.Item>

       <Form.Item name="email"
                  label="Էլ․ հասցե" 
                   rules={[
                    {
                      type: 'email',
                      message: 'խնդրում եմ մուտքագրեք ձեր էլ․ հասցեն',
                    },
                  ]}
                  hasFeedback>
                 
       <Input placeholder='Գրիր քո էլ․ հասցեն'/>
       </Form.Item>

       <Form.Item name="password"
                  label="Գաղտնաբառը"
                  rules={[
                    {
                      required:true,
                      message: 'խնդրում եմ մուտքագրեք ձեր գաղտնաբառը',
                    },
                    {min:6},
                    {
                      validator:(_, value) => 
                      value && value.includes("A")
                      ? Promise.resolve()
                      :Promise.reject("Գաղտնաբառը չի համապատասխանում չափանիշներին")
                    }
                   ]}
                  hasFeedback>
       <Input.Password placeholder='Գրիր քո գաղտնաբառը'/>
       </Form.Item>

       <Form.Item name="confirmPassword"
                  label="Հաստատել գաղտնաբառը"
                  dependencies={["password"]}
                  rules={[
                    {
                      required:true,
                      message: 'խնդրում եմ հաստատեք ձեր գաղտնաբառը',
                    },
                    ({getFieldValue}) =>({validator(_,value){
                      if(!value || getFieldValue('password') === value){
                        return Promise.resolve()
                      }
                      return Promise.reject('Ձեր մուտքագրած երկու գաղտնաբառերը չեն համընկնում'
                      );
                    },
                  }),
                 ]}
                  hasFeedback>
       <Input.Password placeholder='Հաստատիր  քո գաղտնաբառը'/>
       </Form.Item>

       <Form.Item name="gender"
                  label="Սեռը"
                  rules={[
                    {
                      required:true,
                      message: 'խնդրում եմ նշեք ձեր սեռը',
                    },
                  ]} hasFeedback>
       <Select placeholder='Նշել սեռը'>
            <Select.Option value="female">Իգական</Select.Option>
            <Select.Option value="male">Արական</Select.Option>
       </Select>

       </Form.Item>

       <Form.Item name="dob"
                  label="Ծննդյան ամսաթիվը"
                  rules={[
                    {
                      required:true,
                      message: 'խնդրում եմ նշեք ձեր ծննդյան տարեթիվը',
                    },
                  ]} hasFeedback>
       <DatePicker style={{width: "100%"}} picker='data' placeholder='ընտրել ծննդյան ամսաթիվը'/>
       </Form.Item>

       <Form.Item name="website"
                  label="Կայքը"
                  rules={[
                    // {
                    //  required:true,
                    //  message:"Խնդրում եմ մուտքագրեք ձեր կայքի լինքը"
                    // },
                    {
                      type:"url", 
                      message:"խնդրում ենք մուտքագրել վավեր url",
                    }
                  ]}>
       <Input placeholder='ավելացրեք ձեր կայքի լինքը'/>
       </Form.Item>

       <Form.Item name="agreement" wrapperCol={{span:24}}
       valuePropName='checked'
       rules={[
        {
          validator:(_, value) => 
          value 
          ? Promise.resolve()
          :Promise.reject("Շարունակելու համար դուք պետք է համաձայնեք մեր պայմաններին")
        },
       ]}>
       <Checkbox >{" "} համաձայնվնել <a href="#">ընդհանուր դրույթներին եւ պայմաններին</a></Checkbox>
       </Form.Item>

       <Form.Item   wrapperCol={{span:34}}>
       <Button  type="primary" htmlType='submit'>
        Գրանցվել
        </Button>
       </Form.Item>


      </Form>
      </header>
    </div>

  );
}


 export default App;


