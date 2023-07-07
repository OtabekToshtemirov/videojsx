import secondImg from '../../public/images/illustration-2.svg'
import arrow from '../../public/images/icon-arrow.svg'
import quote from '../../public/images/icon-quotes.svg'
import author from '../../public/images/avatar-testimonial.jpg'
const Section = () => {

    return (
        <div className="container">
            <div className="section">
                <div className="section__text">
                    <h1 className={'title'}>Stay productive, wherever you are
                    </h1>
                    <p className={'description'}>
                        Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.
                    </p>
                    <p className={'description'}>
                        Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.
                    </p>
                    <a href="#" className={'link'}>See how Fylo works
                        <img src={arrow} alt=""/>
                    </a>
                    <div className="review">
                        <img src={quote} alt=""/>
                        <div className="review__item">
                            <span className={'izoh'}>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</span>
                            <div className="review__author">
                                <div className="author-img">
                                    <img src={author} alt=""/>
                                </div>
                                <div className="author-info">
                                    <h4>
                                        Kyle Burton
                                    </h4>
                                    <p>Founder & CEO, Huddle</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className="section__img">
                    <img src={secondImg} alt=""/>
                </div>
            </div>
        </div>

    )
}

export default Section