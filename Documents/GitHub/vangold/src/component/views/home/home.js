import "./home.css"
import Banner from "../../core-ui/banner/banner";
import MainSection from "../../core-ui/main-section/main-section";
import Accordion from 'react-bootstrap/Accordion';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TestimonialImg from "../../../assets/images/_testimonial-clients/Picture.png"

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="testimonial-item" data-value="1">
        <div className="client__testimonial-details">
        <div className="arrow_box">
            <span>Efficient Collaborating</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
        </div>
            <div className="TestimonialImg">
                <img src={TestimonialImg} alt="TestimonialImg" />
                <span>Jane Cooper</span>
                <p>CEO at ABC Corporation</p>
            </div>
        </div>
    </div>,
    <div className="testimonial-item" data-value="2">
        <div className="client__testimonial-details">
        <div className="arrow_box">
            <span>Team Management</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
        </div>
            <div className="TestimonialImg">
                <img src={TestimonialImg} alt="TestimonialImg" />
                <span>Jane Cooper</span>
                <p>CEO at ABC Corporation</p>
            </div>
        </div>
    </div>,
    <div className="testimonial-item" data-value="3">
        <div className="client__testimonial-details">
        <div className="arrow_box">
            <span>Mindblowing Service</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.</p>
        </div>
            <div className="TestimonialImg">
                <img src={TestimonialImg} alt="TestimonialImg" />
                <span>Jane Cooper</span>
                <p>CEO at ABC Corporation</p>
            </div>
        </div>
    </div>,
];

const Home = (props) => {
    return (
        <div className="home">
            <div className="page__title">
                <div className="container homepage__header">
                    <h1 className="page__title__inner">Become a Business</h1>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 12C0 5.37258 5.37258 0 12 0H48C54.6274 0 60 5.37258 60 12V48C60 54.6274 54.6274 60 48 60H0V12Z" fill="#164D00"/>
                        <path d="M46 21.3014V30.9881C46 30.9881 43.9268 31.3966 43.4997 31.4503C43.074 31.5039 41.736 31.9359 40.7664 31.0039C39.2711 29.5707 33.9582 24.2871 33.9582 24.2871C33.9582 24.2871 33.0421 23.3883 31.5713 24.1651C30.2211 24.8767 28.2196 25.9197 27.3836 26.3258C25.8033 27.1669 24.4934 25.8324 24.4934 24.8158C24.4934 24.0273 24.9855 23.4921 25.6888 23.0985C27.5951 21.9429 31.6128 19.6877 33.2862 18.7986C34.3034 18.2576 35.0363 18.2112 36.4328 19.3877C38.1527 20.8341 39.6832 22.1526 39.6832 22.1526C39.6832 22.1526 40.1825 22.5692 40.9786 22.4014C42.9337 21.9881 46 21.3014 46 21.3014ZM24.8533 37.7146C25.1106 37.0536 25.0246 36.3142 24.5313 35.807C24.0881 35.3533 23.4409 35.2337 22.8239 35.3751C22.9965 34.7631 22.9012 34.1117 22.4555 33.652C22.0109 33.1995 21.365 33.0775 20.748 33.2202C20.9193 32.6091 20.8243 31.9578 20.3784 31.4994C19.6802 30.7832 18.4725 30.814 17.6791 31.5702C16.8899 32.3275 16.3844 33.6995 17.0887 34.5071C17.7919 35.3106 18.5999 34.8217 19.2158 34.6814C19.0445 35.2925 18.5311 35.8609 19.1634 36.6608C19.7951 37.4611 20.6744 36.9756 21.291 36.8365C21.1191 37.4453 20.6281 38.0708 21.2361 38.8125C21.8496 39.5564 22.8544 39.16 23.5181 38.9539C23.262 39.6124 22.7137 40.3222 23.4181 41.1176C24.1213 41.9188 25.7465 41.5482 26.5403 40.7907C27.332 40.0335 27.408 38.8333 26.7117 38.1148C26.2309 37.6219 25.5143 37.5073 24.8533 37.7146ZM39.3381 32.675C33.5996 26.9364 36.2987 29.6367 33.2105 26.5418C33.2105 26.5418 32.2824 25.6178 31.0591 26.1546C30.2004 26.5308 29.0949 27.0437 28.263 27.4352C27.3489 27.9145 26.691 28.0629 26.3821 28.0609C24.615 28.0493 23.1813 26.6289 23.1813 24.8635C23.1813 23.7183 23.7893 22.7212 24.6961 22.1552C25.9713 21.2728 28.9064 19.7116 28.9064 19.7116C28.9064 19.7116 28.0122 18.5785 26.0534 18.5785C24.0952 18.5785 20.004 21.2588 20.004 21.2588C20.004 21.2588 18.8434 22.0022 17.1889 21.3326L14 20.2221V31.3065C14 31.3065 14.9106 31.57 15.7287 31.9042C15.9135 31.3773 16.2117 30.8906 16.6253 30.4887C17.9826 29.1958 20.2325 29.1824 21.4674 30.454C21.8395 30.8406 22.0991 31.3017 22.2316 31.8115C22.7292 31.9651 23.1799 32.2371 23.5421 32.6103C23.9152 32.9943 24.1739 33.458 24.3075 33.9652C24.8045 34.1189 25.2546 34.392 25.618 34.7654C26.0273 35.1875 26.3 35.6973 26.4273 36.2497C26.9468 36.401 27.4164 36.6826 27.7945 37.0692C28.5367 37.8315 28.8001 38.8658 28.6405 39.8635C28.6418 39.8635 28.6443 39.8635 28.6454 39.8657C28.6576 39.8816 29.1053 40.3807 29.3844 40.6622C29.9316 41.2098 30.825 41.2098 31.3738 40.6622C31.9189 40.1147 31.9213 39.2231 31.3738 38.6729C31.3541 38.6533 29.3999 36.6092 29.5571 36.4507C29.7133 36.2933 32.2031 38.884 32.2495 38.9314C32.7959 39.4779 33.6887 39.4779 34.2376 38.9314C34.7851 38.3839 34.784 37.4923 34.2376 36.9434C34.2107 36.9178 34.0986 36.8104 34.057 36.7677C34.057 36.7677 31.5884 34.5686 31.7763 34.3807C31.9665 34.1917 35.0329 37.0532 35.0378 37.0532C35.589 37.5496 36.4381 37.5459 36.9683 37.0154C37.4843 36.4995 37.4953 35.6834 37.0379 35.1335C37.0283 35.1043 34.7011 32.6722 34.8827 32.4893C35.067 32.3039 37.3697 34.675 37.3745 34.6799C37.9197 35.2263 38.8137 35.2263 39.3626 34.6799C39.909 34.1334 39.909 33.2407 39.3626 32.6893C39.3552 32.6847 39.3454 32.6798 39.3381 32.675Z" fill="white"/>
                    </svg>
                </div>
                <Banner />
                <div className="trusted__clients">
                    <div className="container inn-trusted__clients">
                        <h2>Trusted by our beloved clients</h2>
                        <div className="trustee-_-clients">
                            <svg width="64" height="74" viewBox="0 0 64 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M32 0L25.2275 3.89418L6.77249 14.5608L0 18.455V55.3651L6.77249 59.2593L25.3968 69.9259L32.1693 73.8201L38.9418 69.9259L57.2275 59.2593L64 55.3651V18.455L57.2275 14.5608L38.7725 3.89418L32 0ZM13.545 47.5767V26.2434L32 15.5767L50.455 26.2434V47.5767L32 58.2434L13.545 47.5767Z" fill="#2A5ADA"/>
                            </svg>
                            <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4587 32.0091L7.23842 39.2293L0 32.0091L7.22023 24.7889L14.4587 32.0091ZM32.0091 14.4587L44.3944 26.844L51.6147 19.6238L32.0091 0L12.3853 19.6238L19.6056 26.844L32.0091 14.4587ZM56.7798 24.7889L49.5595 32.0091L56.7798 39.2293L64 32.0091L56.7798 24.7889ZM32.0091 49.5595L19.6238 37.1742L12.4035 44.3944L32.0091 64.0182L51.6147 44.3944L44.3944 37.1742L32.0091 49.5595ZM32.0091 39.2293L39.2293 32.0091L32.0091 24.7889L24.7707 32.0091L32.0091 39.2293Z" fill="#F0B90B"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <MainSection cardDetails={props.cardDetails} />
                <div className="collaborate">
                    <div className="container">
                        <div className="collaborate__inner">
                            <div className="collaborate-text">
                                <p className="collaborate-text__title">
                                    Collaborate better on projects
                                </p>
                                <p className="collaborate-text__subtitle">
                                    With our team of disciplined professionals, to collaborate on your project just got easier.
                                    Collaboration brings increased creativity,
                                    perspective and innovation to your product, making your business scale very fast.
                                </p>
                                <button className="collaborate-button">
                                    <span>Get started</span>
                                    <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.2931 1.70711C13.9026 1.31658 13.9026 0.683417 14.2931 0.292893C14.6837 -0.0976311 15.3168 -0.0976311 15.7074 0.292893L21.7073 6.29289C22.0979 6.68342 22.0979 7.31658 21.7073 7.70711L15.7074 13.7071C15.3168 14.0976 14.6837 14.0976 14.2931 13.7071C13.9026 13.3166 13.9026 12.6834 14.2931 12.2929L18.586 7.99998H1.01103C0.452653 7.99998 0 7.55227 0 6.99998C0 6.4477 0.452653 5.99998 1.01103 5.99998H18.586L14.2931 1.70711Z" fill="#45B618"/>
                                    </svg>

                                </button>
                            </div>
                            <div className="collaborate-image">
                                <img src="images/collaborate.png" alt="collaborate"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="manage-your-team">
                    <div className="container">
                        <div className="manage-your-team__inner">
                            <div className="manage-your-team-text">
                                <p className="manage-your-team-title">
                                    Manage your team effectively
                                </p>
                                <p className="manage-your-team-subtitle">
                                    Manage your teams, issue tasks and track the progress of each member
                                    of your team and most imoprtantly, build a world class business.
                                </p>
                            </div>
                            <div className="manage-your-team-image">
                                <img src="images/manage-your-team.png" alt="manage your team"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ourclients__testimonial">
                    <div className="container">
                        <div className="container inn__ourclients__testimonial">
                            <div className="inn__ourclients__testimonial__header">
                                <h2>Our Clients Speak</h2>
                                <p>We have been working with clients around the world</p>
                            </div>
                            <div className="testimonial-container">
                                <AliceCarousel
                                    mouseTracking
                                    items={items}
                                    responsive={responsive}
                                    controlsStrategy="alternate"
                                    disableButtonsControls="false"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="what-you-stand-to-gain">
                    <div className="inn__what-you-stand-to-gain">
                        <div className="what-you-stand-to-gain__list-container">
                            <div className="what-you-stand-to-gain__lists">
                                <div className="inn-what-you-stand-to-gain__lists">
                                    <h2>What you stand to gain</h2>
                                    <p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#45B618"/>
                                        </svg>
                                        A well detailed project management tool
                                    </p>
                                    <p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#45B618"/>
                                        </svg>
                                        Ability to collaborate as a team
                                    </p>
                                    <p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#45B618"/>
                                        </svg>
                                        Effective and reliable payment system
                                    </p>
                                    <p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#45B618"/>
                                        </svg>
                                        Curated management and budget flow
                                    </p>
                                    <p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#45B618"/>
                                        </svg>
                                        Manage your business on the go
                                    </p>
                                </div>
                            </div>
                            <div className="unlimited__access">
                                <div className="unlimited__access-top">
                                    <p>Enjoy unlimited access to our resources</p>
                                </div>

                                <div className="unlimited__access_span">
                                    <span>100% Free</span>
                                </div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="accordion">
                    <div className="container">
                        <h2 className="accordionH2">FAQ’s</h2>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h2 className="accordion-header">What is Vangold Services?</h2></Accordion.Header>
                                <Accordion.Body>
                                    <p className="accordion__Para">Vangold Services is a unique platform for freelancers, where they can offer their services according to their skills and expertise. </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h2 className="accordion-header">Who can join this platform?</h2></Accordion.Header>
                                <Accordion.Body>
                                    <p className="accordion__Para">This platform is perfectly available for individuals, businesses, and brands. This platform is designed to work according to all of your business requirements and enhances your business by giving you your targeted customers. </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h2 className="accordion-header">What kind of services can be offered on this platform?</h2></Accordion.Header>
                                <Accordion.Body>
                                    <p className="accordion__Para">You can provide all kinds of freelancing services that are available on other famous freelancing platforms like graphic designing, creative writing, video editing, SEO, web development, app development, web designing, voice-over, etc. Plus you have the option to provide some extra services like virtual meetings and classrooms, job offers and recruitments, etc.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><h2 className="accordion-header">How many payment methods are available at Vangold services?</h2></Accordion.Header>
                                <Accordion.Body>
                                    <p className="accordion__Para">There are multiple payment methods available on this platform. You can choose any convenient method that suits you better. We accept payments through PayPal, debit card, credit card, cryptocurrency, or fiat. Vangold Services is a very secure platform in terms of payment and data security. You can also connect your account to Meta mask and trust wallet.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><h2 className="accordion-header">What are the additional features at Vangold services as compared with other freelancing platforms?</h2></Accordion.Header>
                                <Accordion.Body>
                                    <p className="accordion__Para">
                                        Vangold Services aims to provide the best freelancing experience to both customers and sellers. We understand the need of the day and try to equip our platform with all the necessary features that will be helpful in your growth. 
                                        Just like some traditional freelancing platforms, we are not stuck with the limited features. We introduced some additional features to add value to the freelancing profession. On the Vangold Services platform, you can:
                                        •	Arrange virtual meetings or classes with your business partners or students<br/>
                                        •	Do job postings and recruitments<br/>
                                        •	Do group chat with fellow users in the same department<br/> 
                                        •	Create/publish posts<br/>
                                        •	Upvote or downvote other users feeds or donate a small amount of token as a tip<br/>
                                        •	Make payments through cryptocurrency or fiat<br/> 
                                        •	Use Meta mask and trust wallet<br/>
                                        •	Switch between dark and light mode<br/>
                                        •	Get a verified account to maintain your unique identity<br/>
                                        •	Search for jobs<br/>
                                    </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header><h2 className="accordion-header">How is it beneficial for businesses and brands?</h2></Accordion.Header>
                                <Accordion.Body>
                                    <p className="accordion__Para">Vangold Services takes care of all kinds of accounts. Whether it is an individual account, business, or brand, we aim to provide you best, secure, and unique selling experience on our platform. We also understand the concerns of businesses and brands. That is why we took the initiative to maintain their unique identity on our platform. You can simply get your account verified. It will give a verified account sign on your profile. And it will helpful for you to maintain your unique identity and originality. Also, customers will easily reach you out without misunderstanding similar names. </p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header><h2 className="accordion-header">How to get my account verified at Vangold services?</h2></Accordion.Header>
                                <Accordion.Body>
                                    <p className="accordion__Para">The procedure to get a verified account is very simple. You will be given an account verification form just like Instagram. You just have to fill that form with the correct details. Our team will review that form and if they think you are eligible to get a unique identity, you will get an account verification badge on your profile. Please note that submitting the account verification form does not give a guarantee that your account will be get verified.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header><h2 className="accordion-header">What is a group chat feature?</h2></Accordion.Header>
                                <Accordion.Body>
                                    <p className="accordion__Para">We introduced this feature to enhance your selling experience. You create a group of similar skilled persons and interact with them through chat. You can share your experience with them or get useful information or tips from experienced sellers. This will be very helpful for you to deal with your customers in a better way.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8">
                                <Accordion.Header><h2 className="accordion-header">Can I convert my account into a business account?</h2></Accordion.Header>
                                <Accordion.Body>
                                    <p className="accordion__Para">Yes, if you think that you have got enough orders or you have enough skills, time, and recourses to handle a large number of orders, you convert your account into a business account. You can also hire a team of skilled freelancers to work for your business. And if you want, you can get a verified account for your business.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9">
                                <Accordion.Header><h2 className="accordion-header">Can I show my past work experience on my Profile?</h2></Accordion.Header>
                                <Accordion.Body>
                                    <p className="accordion__Para">Yes, you can show your past work experience on your profile. It is a very useful feature to attract new customers. Customers will be able to see your skills and work quality by visiting your profile. And will be able to decide whether to place an order or not.</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="become-a-business-banner">
                    <p>Manage your teams and projects anytime and anywhere</p>
                    <button>Become a Business</button>
                </div>
            </div>
        </div>
    )
}

export default Home