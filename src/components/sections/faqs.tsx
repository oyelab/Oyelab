import { useState } from 'react';
import SectionTitle from "@components/ui/sectionTitle";
import { faqData } from "@utils/fackData/faqData";
import Modal from './Modal';

const Faqs = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <section id="faqs" className="any-questions-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <SectionTitle>
                            <SectionTitle.Name>FAQs</SectionTitle.Name>
                            <SectionTitle.Title>Frequently Asked Questions</SectionTitle.Title>
                            <SectionTitle.Description>Unsure about subscription design?</SectionTitle.Description>
                        </SectionTitle>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="book-call-intro text-center">
                            <img src="/images/about/founder.png" className="img-fluid rounded" alt="founder" title="founder" />
                            <h2>Book a 15-minute intro call</h2>
                            <button type="button" className="theme-btn" onClick={handleOpenModal}>
                                Schedule now<i className="ri-video-chat-line" />
                            </button>
                            <p>Prefer to email? <a href="mailto:hello@oyelab.com">hello@oyelab.com</a></p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-6">
                        <div className="accordion accordion-flush" id="accordionFlushExample">
                            {
                                faqData.map(({ ans, id, question }) => {
                                    return (
                                        <div key={id} className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={`${id}`}>{question}</button>
                                            </h2>
                                            <div id={`${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">
                                                    <p>{ans}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onClose={handleCloseModal} title="Schedule a Call">
                <p>To schedule a 15-minute intro call, please provide your details and preferred time slot.</p>
                {/* Add your form or additional content here */}
            </Modal>
        </section>
    );
};

export default Faqs;