import  {useState} from 'react';
import illustration from '../../public/images/illustration-1.svg'

const Main = () => {
    const [valid, setValid] = useState(false);
    const [email, setEmail] = useState('');


    const validateEmail = (e) => {
        setEmail(e.target.value);
        const regex = /\S+@\S+\.\S+/;
        if(regex.test(e.target.value)){
            setValid(true);
        }else{
            setValid(false);
        }
        console.log(valid)
    }




    return (
        <div className="container">
            <div className={'main'}>
                <div className="text">
                    <h1 className={'title'}>
                        All your files in one secure location, accessible anywhere.
                    </h1>
                    <p className={'description'}>
                        Fylo stores all your most important files in one secure location. Access them wherever you need,
                        share and collaborate with friends family, and co-workers.
                    </p>
                    <div className="input">
                        <div className={'input-box'}>
                            <input  type="text" placeholder={'Enter your email...'} onChange={validateEmail}/>
                            <label htmlFor="email" className={valid ? 'valid' : 'invalid'}>{valid ? '' : 'Please check your email'}</label>
                        </div>

                        <button
                            className={'btn'}
                            disabled={!valid}
                        >Get Started</button>
                    </div>
                </div>
                <div className="image">
                    <img src={illustration} alt=""/>
                </div>
            </div>
        </div>

    );
};

export default Main;