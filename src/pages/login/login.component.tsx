import Input from '../../components/input/input.component';
import Button from '../../components/button/button.component';

import imageClientArea from '../../images/client-area-image.svg';

import { AiOutlineMail } from "react-icons/ai";
import { LuKeyRound } from "react-icons/lu";

import './login.component.scss'

function Login(){
    return (
        <section className="conteiner">
            <aside className='image'>
                <div>
                    <h2>Já é cliente nosso?</h2>
                    <p>
                        Faça login com seu email e cpf para vizualizar<br/>
                        suas compras, garantia dos seus produtos e mais
                    </p>
                </div>
                <img src={imageClientArea} />
            </aside>
            <aside className='login'>
                <div className='form-login'>
                    <h2>Login</h2>
                    <Input type='text' 
                           placeholder='Email'
                           handleOnChange={(e) => console.log('digitou o email: ', e)}
                    >
                        <AiOutlineMail />
                    </Input>
                    <Input type='password' 
                           placeholder='Cpf'
                           handleOnChange={(e) => console.log('digitou a senha: ', e)}
                    >
                        <LuKeyRound />
                    </Input>
                    <Button style='button-primary' 
                            text='Entrar' 
                            handleClick={() => console.log('Entrando na minha área')}
                    />
                </div>
            </aside>
        </section>
    )
}

export default Login;