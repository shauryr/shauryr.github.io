import Image from "next/image"
import { Twitter, Github, Mail, Phone, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 bg-gray-900 text-gray-100">
      {/* Profile Section */}
      <div className="flex flex-col items-center mb-12">
        <div className="relative w-40 h-40 rounded-full overflow-hidden mb-4">
          <Image
            src="/assets/profile.jpg"
            alt="Profile Picture"
            width={160}
            height={160}
            className="rounded-full"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-white text-center">Shaurya Rohatgi</h1>
        <p className="text-gray-300 mb-4 text-center">
          Applied Scientist | LLM & IR Researcher | PhD in Informatics
          <br /><br />
          I was building search engines, advanced retrieval and re-ranking systems long before they rebranded it as "RAG" when LLMs took over the spotlight.
        </p>
        <div className="flex space-x-3 mb-4">
          <Link href="https://twitter.com/shauryr" aria-label="Twitter" className="text-gray-300 hover:text-white">
            <Twitter size={24} />
          </Link>
          <Link href="https://github.com/shauryr" aria-label="GitHub" className="text-gray-300 hover:text-white">
            <Github size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/shaurya-rohatgi" aria-label="LinkedIn" className="text-gray-300 hover:text-white">
            <Linkedin size={24} />
          </Link>
          <Link href="mailto:shauryr@gmail.com" aria-label="Email" className="text-gray-300 hover:text-white">
            <Mail size={24} />
          </Link>
        </div>
      </div>

      {/* About Me Section */}
      <section className="mb-12 bg-gray-800 rounded-lg p-6 border border-gray-700">
        <h2 className="text-2xl font-bold mb-4 text-white">AI & LLM Research Expertise ✨</h2>
        <div className="space-y-4">
          <p className="text-gray-300">
            I'm at the forefront of Large Language Model (LLM) research and applications, specializing in pushing the boundaries of what's possible with generative AI systems. My work spans cutting-edge areas including:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-md border border-gray-600">
              <h3 className="font-bold text-purple-300 mb-2">🔧 LLM Fine-tuning & Optimization</h3>
              <p className="text-gray-300">Expert in parameter-efficient fine-tuning (PEFT), quantization, and deployment of models from 7B to 70B parameters. Developed techniques reducing inference costs by 90% while maintaining performance.</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-md border border-gray-600">
              <h3 className="font-bold text-purple-300 mb-2">🔍 RAG & Knowledge Integration</h3>
              <p className="text-gray-300">Developed advanced retrieval-augmented generation systems that combine vector search, hybrid retrievers, and context-aware reranking to ground LLMs in factual knowledge.</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-md border border-gray-600">
              <h3 className="font-bold text-purple-300 mb-2">🤖 LLM Agentic Frameworks</h3>
              <p className="text-gray-300">Architected sophisticated multi-agent systems with tool-using capabilities, enabling complex reasoning, planning, and autonomous task execution. Implemented frameworks for agent collaboration, memory persistence, and self-improvement.</p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-md border border-gray-600">
              <h3 className="font-bold text-purple-300 mb-2">🧪 AI for Scientific Discovery</h3>
              <p className="text-gray-300">Created AI systems that accelerate research workflows through automated literature analysis, hypothesis generation, and experimental design assistance in biomedical domains.</p>
            </div>
          </div>
          
          <p className="text-gray-300">
            My research has been published in top-tier venues including EMNLP, NAACL, and specialized AI workshops. I regularly contribute to open-source AI projects and stay at the cutting edge of developments in foundation models, prompt engineering, and AI alignment.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <div className="border-t border-gray-700 pt-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Experience 💼</h2>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-20 top-0 bottom-0 w-0.5 bg-gray-600"></div>
          
          {/* AllSci Entry */}
          <div className="flex mb-12 relative">
            <div className="w-28 flex-shrink-0 relative">
              <div className="text-gray-300 text-base font-bold">2023 - Present</div>
            </div>
            <div className="flex-grow">
              <div className="flex items-start">
                <div className="w-16 h-16 mr-4 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
                  <Image src="/assets/logos/allsci.png" alt="AllSci Logo" width={64} height={64} className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="font-bold">Applied Scientist</h3>
                  <p className="mt-2">
                    • Lead the development of state-of-the-art LLM systems, implementing advanced techniques like RLHF, and AI for scientific applications.
                    <br />• Developed a novel RAG pipeline (patent pending) with hybrid retrievers and reranking, improving factual accuracy by 45% in domain-specific generation tasks.
                    <br />• Parameter-efficient fine-tuning methods for 70B parameter models, achieving specialized capabilities with minimal compute resources.
                    <br />• Designed and implemented an agentic framework enabling LLMs to autonomously plan experiments, access specialized tools, and collaborate with other AI agents to solve complex scientific problems.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* University of Chicago Entry */}
          <div className="flex mb-12 relative">
            <div className="w-28 flex-shrink-0 relative">
              <div className="text-gray-300 text-base font-bold">2023</div>
            </div>
            <div className="flex-grow">
              <div className="flex items-start">
                <div className="w-16 h-16 mr-4 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
                  <Image src="/assets/logos/uchicago.png" alt="UChicago Logo" width={64} height={64} className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="font-bold">Computational Scientist at University of Chicago</h3>
                  <p className="mt-2">
                    • Designed and implemented smaRT, an advanced AI system leveraging transformer-based models for automated ticket classification and resolution.
                    <br />• Created a custom fine-tuned LLM for domain-specific understanding of technical support requests, achieving 92% accuracy in intent recognition.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Allen Institute of Artificial Intelligence Entry */}
          <div className="flex mb-12 relative">
            <div className="w-28 flex-shrink-0 relative">
              <div className="text-gray-300 text-base font-bold">2021 - 2022</div>
            </div>
            <div className="flex-grow">
              <div className="flex items-start">
                <div className="w-16 h-16 mr-4 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
                  <Image src="/assets/logos/allen-ai.png" alt="Allen Institute Logo" width={64} height={64} className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="font-bold">
                    Research Intern/Collaborator at Allen Institute of Artificial Intelligence
                  </h3>
                  <p className="mt-2">
                    • Developed S2AMP, a novel dataset for academic mentorship prediction using advanced NLP techniques and graph neural networks.
                    <br />• Engineered a large-scale paper clustering system processing 800+ million academic documents using BERT-based embeddings and hierarchical clustering.
                    <br />• Contributed to the Semantic Scholar platform, implementing ML pipelines for deduplication of academic papers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Penn State University Entry */}
          <div className="flex mb-12 relative">
            <div className="w-28 flex-shrink-0 relative">
              <div className="text-gray-300 text-base font-bold">2018 - 2023</div>
            </div>
            <div className="flex-grow">
              <div className="flex items-start">
                <div className="w-16 h-16 mr-4 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
                  <Image src="/assets/logos/penn-state.png" alt="Penn State Logo" width={64} height={64} className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="font-bold">
                    Research Assistant at The Intelligent Information Systems Research Laboratory
                  </h3>
                  <p className="mt-2">
                    • Led the MathSeer project, implementing transformer-based models for mathematical formula search, boosting search precision by 40%.
                    <br />• Pioneered novel neural ranking models for scientific document retrieval, outperforming traditional BM25 baselines by 35%.
                    <br />• Developed advanced NLP techniques for automatic metadata extraction from scientific documents with 95% accuracy.
                    <br />• Enhanced CiteSeerX digital library with machine learning-based document classification and citation network analysis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tata Research Entry */}
          <div className="flex mb-12 relative">
            <div className="w-28 flex-shrink-0 relative">
              <div className="text-gray-300 text-base font-bold">2014 - 2017</div>
            </div>
            <div className="flex-grow">
              <div className="flex items-start">
                <div className="w-16 h-16 mr-4 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
                  <Image src="/assets/logos/tata.png" alt="Tata Research Logo" width={64} height={64} className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="font-bold">Researcher at Tata Research</h3>
                  <p className="mt-2">
                    • Developed state-of-the-art dialogue-based NLU systems using recurrent neural networks and attention mechanisms.
                    <br />• Implemented a novel two-stage clustering algorithm for email categorization, achieving 87% classification accuracy.
                    <br />• Created custom word embeddings for domain-specific language understanding in enterprise environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <section className="border-t border-gray-700 pt-8 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Education 🎓</h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
              <Image src="/assets/logos/penn-state.png" alt="Penn State Logo" width={64} height={64} className="object-contain p-1" />
            </div>
            <div>
              <h3 className="font-bold">Pennsylvania State University</h3>
              <p>PhD - Information Sciences and Technology</p>
              <p className="text-gray-400">August 2017 - May 2023</p>
              <p>
                Thesis: Design and Data Mining Techniques for Large-Scale Scholarly Digital Libraries and Search Engines
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-16 h-16 mr-4 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
              <Image src="/assets/logos/iiitm.jpg" alt="IIITM Logo" width={64} height={64} className="object-contain p-1" />
            </div>
            <div>
              <h3 className="font-bold">Indian Institute of Information Technology and Management</h3>
              <p>Integrated Post Graduate - Information Technology</p>
              <p className="text-gray-400">July 2009 - June 2014</p>
              <p>Key Courses: Operating Systems, Data Structures, Design and Analysis of Algorithms</p>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="border-t border-gray-700 pt-8 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Selected Publications 📚</h2>
        <p className="mb-4">
          For full list of publications, please visit:{" "}
          <Link href="https://scholar.google.com/citations?hl=en&user=UpHQFasAAAAJ&view_op=list_works&sortby=pubdate" className="text-blue-400 hover:underline">
            Google Scholar
          </Link>
          ,{" "}
          <Link href="https://www.semanticscholar.org/author/Shaurya-Rohatgi/40408676" className="text-blue-400 hover:underline">
            Semantic Scholar
          </Link>
        </p>
        <div className="space-y-4">
          <div className="border border-gray-700 rounded-md p-4 bg-gray-800">
            <p className="font-semibold text-purple-300">Do Large Multimodal Models Solve Caption Generation for Scientific Figures? Lessons Learned from SCICAP Challenge 2023</p>
            <p className="text-sm text-pink-300">
              Hsu, T. Y. E., Hsu, Y. L., Rohatgi, S., Huang, C. Y., Ng, H. Y. S., Rossi, R., Kim, S., Yu, T., et al. (2025)
            </p>
            <p className="text-sm text-emerald-300">arXiv preprint arXiv:2501.19353</p>
          </div>

          <div className="border border-gray-700 rounded-md p-4 bg-gray-800">
            <p className="font-semibold text-purple-300">If in a crowdsourced data annotation pipeline, a GPT-4</p>
            <p className="text-sm text-pink-300">
              He, Z., Huang, C. Y., Ding, C. K. C., Rohatgi, S., Huang, T. H. K. (2024)
            </p>
            <p className="text-sm text-emerald-300">Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems</p>
          </div>

          <div className="border border-gray-700 rounded-md p-4 bg-gray-800">
            <p className="font-semibold text-purple-300">The Semantic Scholar Open Data Platform</p>
            <p className="text-sm text-pink-300">
              Kinney, R., Anastasiades, C., Authur, R., Beltagy, I., Bragg, J., Buraczynski, A., ... Weld, D. S. (2023)
            </p>
            <p className="text-sm text-emerald-300">arXiv preprint arXiv:2301.10140</p>
          </div>

          <div className="border border-gray-700 rounded-md p-4 bg-gray-800">
            <p className="font-semibold text-purple-300">Fighting fire with fire: The dual role of LLMs in crafting and detecting elusive disinformation</p>
            <p className="text-sm text-pink-300">
              Lucas, J., Uchendu, A., Yamashita, M., Lee, J., Rohatgi, S., Lee, D. (2023)
            </p>
            <p className="text-sm text-emerald-300">Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP)</p>
          </div>

          <div className="border border-gray-700 rounded-md p-4 bg-gray-800">
            <p className="font-semibold text-purple-300">The ACL OCL Corpus: Advancing Open Science in Computational Linguistics</p>
            <p className="text-sm text-pink-300">
              Rohatgi, S., Qin, Y., Aw, B., Unnithan, N., Kan, M. Y. (2023)
            </p>
            <p className="text-sm text-emerald-300">Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP)</p>
          </div>

          <div className="border border-gray-700 rounded-md p-4 bg-gray-800">
            <p className="font-semibold text-purple-300">S2AMP: A high-coverage dataset of scholarly mentorship inferred from publications</p>
            <p className="text-sm text-pink-300">
              Rohatgi, S., Downey, D., King, D., Feldman, S. (2022)
            </p>
            <p className="text-sm text-emerald-300">Proceedings of the 22nd ACM/IEEE Joint Conference on Digital Libraries</p>
          </div>

          <div className="border border-gray-700 rounded-md p-4 bg-gray-800">
            <p className="font-semibold text-purple-300">Large scale subject category classification of scholarly papers with Deep Attentive Neural Networks</p>
            <p className="text-sm text-pink-300">
              Kandimalla, B., Rohatgi, S., Wu, J., Giles, C. L. (2021)
            </p>
            <p className="text-sm text-emerald-300">Frontiers in Research Metrics and Analytics, 5, 600382</p>
          </div>

          <div className="border border-gray-700 rounded-md p-4 bg-gray-800">
            <p className="font-semibold text-purple-300">Accelerating substructure similarity search for formula retrieval</p>
            <p className="text-sm text-pink-300">
              Zhong, W., Rohatgi, S., Wu, J., Giles, C. L., Zanibbi, R. (2020)
            </p>
            <p className="text-sm text-emerald-300">Advances in Information Retrieval: 42nd European Conference on IR Research (ECIR)</p>
          </div>

          <div className="border border-gray-700 rounded-md p-4 bg-gray-800">
            <p className="font-semibold text-purple-300">PSU at CLEF-2020 ARQMath Track: Unsupervised Re-ranking Using Pretraining</p>
            <p className="text-sm text-pink-300">
              Rohatgi, S., Wu, J., Giles, C. L. (2020)
            </p>
            <p className="text-sm text-emerald-300">CEUR Workshop Proceedings</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="border-t border-gray-700 pt-8 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Featured Projects 🚀</h2>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
              <Image src="/assets/logos/llama-hub.jpeg" alt="Llama-hub project" width={64} height={64} className="object-contain p-1" />
            </div>
            <div>
              <h3 className="font-bold">
                <Link href="https://github.com/run-llama/llama_index" className="text-blue-400 hover:underline">
                  Llama-index
                </Link>
              </h3>
              <p>
                Engineered a plugin-based tool for integrating custom data sources with Language Models (LLMs).
                The project has garnered over 2.3k stars on GitHub.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
              <Image src="/assets/logos/refstudio.png" alt="RefStudio project" width={64} height={64} className="object-contain p-1" />
            </div>
            <div>
              <h3 className="font-bold">
                <Link href="https://github.com/refstudio/refstudio" className="text-blue-400 hover:underline">
                  Refstudio
                </Link>
              </h3>
              <p>
                Contributed to a specialized text editor for reference-heavy writing, incorporating Language Model
                support to streamline the academic writing workflow.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-16 flex-shrink-0 rounded overflow-hidden flex items-center justify-center">
              <Image src="/assets/logos/s2qa.png" alt="S2QA project" width={64} height={64} className="object-contain p-1" />
            </div>
            <div>
              <h3 className="font-bold">
                <Link href="https://github.com/shauryr/S2QA" className="text-blue-400 hover:underline">
                  S2QA: Research Question Answering
                </Link>
              </h3>
              <p>
                Pioneered a research Q&A tool employing Semantic Scholar and GPT-4 to provide authoritative answers
                drawn from top-tier research papers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-t border-gray-700 pt-8 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Skills 💻</h2>
        <p className="text-gray-300 italic mb-4">⚡ CUDA driver installation ninja: I do it right on the first try—no explosions! ⚡</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Technologies and Frameworks:</h3>
            <p>
              SQL, PyTorch, Keras, TensorFlow, Apache Hadoop, ElasticSearch, Scrapy, Heritrix, Docker, Kubernetes,
              Apache Flink, Apache Airflow, Sagemaker, Streamlit
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Machine Learning Tools:</h3>
            <p>
              huggingface, AWS Sagemaker, vLLM, spaCy, NLTK, YARN, Generative LLMs (including GPT, Llama, and related
              tools like llama-index, llama-hub, langchain), LLMOps, replicate.ai, CrewAI, AutoGPT, BabyAGI, LangGraph
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Programming Languages:</h3>
            <p>Python, Java, C, C++, PySpark</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Operating Systems:</h3>
            <p>Proficient with Linux and various distributions</p>
          </div>
        </div>
      </section>

      {/* Awards and Certifications Section */}
      <section className="border-t border-gray-700 pt-8 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Awards and Certifications 🏆</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              <Link href="https://devpost.com/software/weatherornot-q79rxp" className="text-blue-400 hover:underline">
                Winner AccuWeather Challenge at HackPSU'18 - WeatherOrNot
              </Link>
            </h3>
            <p>Weather Assisted smart travel suggestions</p>
          </div>
          <div>
            <h3 className="font-semibold">
              <Link href="http://www.collegian.psu.edu/news/campus/article_4f5dddf6-008a-11e8-b1d6-b3be383b482c.html" className="text-blue-400 hover:underline">
                1st prize winner at HackPSU'17 - FindVisor (IBM Watson Runner Ups)
              </Link>
            </h3>
            <p>
              Created a web application which suggests a research adviser for graduate students and ranked professors
              relevant to them.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">
              <Link href="https://nittanyai.psu.edu/alliance-programs/nittany-ai-challenge/past-winners/2018-results/" className="text-blue-400 hover:underline">
                Winner Nittany AI Challenge'18 - ProFound: A Professor Search Engine
              </Link>
            </h3>
            <p>
              Team Lead - Project was funded for $17,500 and has received support from LaunchBox at the The Pennsylvania State University.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Certifications:</h3>
            <ul className="list-disc pl-5">
              <li>Machine Learning by Stanford University on Coursera</li>
              <li>Neural Networks and Deep Learning by deeplearning.ai on Coursera</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Teaching Experience Section */}
      <section className="border-t border-gray-700 pt-8 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Teaching Experience 👨‍🏫</h2>
        <div>
          <h3 className="font-semibold">Instructor - Information Retrieval and Search Engines: IST441</h3>
          <p>Spring'18, Spring'19, Spring'20, Fall'21</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Helped design and was the primary instructor for the lab.</li>
            <li>
              Students were taught how to crawl the web using ScraPy and build a search engine with the crawled
              documents using ElasticSearch.
            </li>
            <li>Worked with graduate students to create custom search engines -PrivaSeer</li>
          </ul>
        </div>
      </section>

      {/* Academic Service Section */}
      <section className="border-t border-gray-700 pt-8 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Academic Service 🤝</h2>
        <ul className="list-disc pl-5">
          <li>TheWebConf 2019 (The Web Conference, 2019) : Subreviewer</li>
          <li>JCDL 2019 (ACM/IEEE Joint Conference on Digital Libraries 2019) : Subreviewer</li>
          <li>TheWebConf 2020 (The Web Conference, 2020) : Subreviewer</li>
          <li>
            CLEF 2020 (Conference and Lab of the Evaluation Forum) : PC member (ARQMath - Answer Retrieval for Math
            Questions)
          </li>
          <li>AI4SG 2021 (International IJCAI Workshop on Artificial Intelligence for Social Good 2021) : PC member</li>
          <li>
            CLEF 2021 (Conference and Lab of the Evaluation Forum) : PC member (ARQMath-2 - Answer Retrieval for Math
            Questions)
          </li>
        </ul>
      </section>

      {/* Press Coverage Section */}
      <section className="border-t border-gray-700 pt-8 pb-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Selected Press Coverage 📰</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">
              <Link
                href="https://www.psu.edu/news/academics/story/2018-nittany-ai-challenge-winners-provide-edtech-solutions-receive-50000/"
                className="text-blue-400 hover:underline"
              >
                2018 Nittany AI Challenge winners provide EdTech solutions, receive $50,000
              </Link>
            </h3>
          </div>
          <div>
            <h3 className="font-semibold">
              <Link
                href="https://www.collegian.psu.edu/news/campus/hackpsu-winning-website-aims-to-combat-challenge-of-finding-an-adviser/article_4f5dddf6-008a-11e8-b1d6-b3be383b482c.html"
                className="text-blue-400 hover:underline"
              >
                HackPSU winning website aims to combat challenge of finding an adviser
              </Link>
            </h3>
          </div>
        </div>
      </section>
    </main>
  )
}

