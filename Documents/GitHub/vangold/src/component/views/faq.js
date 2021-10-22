import Accordion from 'react-bootstrap/Accordion';

const Faqs = () => {
    return (
        <div className="Faqs">
            <div className="accordion">
                <div className="container faqs__header__title">
                    <h1>Frequently Asked Questions</h1>
                </div>
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
        </div>
        
    )
}

export default Faqs