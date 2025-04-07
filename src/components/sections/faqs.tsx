import SectionTitle from "@components/ui/sectionTitle";
import { faqData } from "@utils/fackData/faqData";

const Faqs = () => {

    return (
        <section id="faqs" className="any-questions-area section-padding">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-12 col-lg-12 text-center">
						<SectionTitle>
							<SectionTitle.Name>FAQs</SectionTitle.Name>
							<SectionTitle.Title>Frequently Asked Questions</SectionTitle.Title>
							<SectionTitle.Description>Unsure about subscription design?</SectionTitle.Description>
						</SectionTitle>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-8 col-md-6">
						<div className="accordion accordion-flush" id="accordionFlushExample">
							{
								faqData.map(({ ans, id, question }) => {
									return (
										<div key={id} className="accordion-item">
											<h2 className="accordion-header">
												<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={`${id}`}>
													{question}
												</button>
											</h2>
											<div id={`${id}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
												<div className="accordion-body">
													<p>{ans}</p>
												</div>
											</div>
										</div>
									);
								})
							}
						</div>
					</div>
				</div>
			</div>
        </section>
    );
};

export default Faqs;