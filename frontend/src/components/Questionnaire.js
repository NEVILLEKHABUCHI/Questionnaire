import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/styles.css';

const Questionnaire = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyDescription: '',
    missionVision: '',
    brandPersonality: '',
    existingBranding: '',
    servicesProducts: '',
    businessDuration: '',
    businessUniqueness: '',
    digitalMarketingSEO: '',
    employees: '',
    competitors: '',
    contactName: '',
    position: '',
    phoneNumber: '',
    emailAddress: '',
    communicationMethod: '',
    websitePurpose: '',
    specificGoals: '',
    targetAudience: '',
    userActions: '',
    currentWebsite: '',
    currentTraffic: '',
    cmsPlatform: '',
    existingContent: '',
    contentHelp: '',
    photoVideoContent: '',
    contentStrategy: '',
    anticipatedPages: '',
    blogNews: '',
    specialFeatures: '',
    websiteExamples: '',
    colorPreferences: '',
    designGuidelines: '',
    imageryAssets: '',
    mobileResponsive: '',
    eCommerce: '',
    thirdPartyIntegration: '',
    multilingualSupport: '',
    analyticsTracking: '',
    regulatoryCompliance: '',
    seoImportance: '',
    domainName: '',
    socialMediaProfiles: '',
    hostingProvider: '',
    hostingHelp: '',
    trainingUpdate: '',
    deadlines: '',
    additionalNotes: '',
    questionsConcerns: '',
    technicalDocuments: '',
    stakeholders: '',
    additionalExpectations: ''
  });
  const [currentSection, setCurrentSection] = useState(0);
  const navigate = useNavigate();

  const sections = [
    { 
      title: 'SECTION 1: COMPANY OVERVIEW', 
      questions: [
        'What is the name of your company or organization?',
        'Describe your company in 1-2 sentences:',
        'What is your company’s mission and vision?',
        'Describe your brand personality in a few words:',
        'List any existing branding (e.g., logo, color palette, font styles):',
        'Please list each service and/or all products you offer:',
        'How long have you been in business?',
        'What makes your business unique?'
      ]
    },
    { 
      title: 'SECTION 2: CONTACT INFORMATION', 
      questions: [
        'Contact person’s name:',
        'Position/title:',
        'Phone Number:',
        'Email Address:',
        'Preferred Communication Method:'
      ]
    },
    { 
      title: 'SECTION 3: PROJECT OBJECTIVES', 
      questions: [
        'What is the primary purpose of your website?',
        'What specific goals do you want your website to achieve?',
        'Who is your target audience (demographics, interests, behaviors)?',
        'What actions do you want users to take on the site (e.g., buy, book, contact)?'
      ]
    },
    { 
      title: 'SECTION 4: CURRENT WEBSITE (IF APPLICABLE)', 
      questions: [
        'Do you have a current website? (If yes, please provide the URL):',
        'What are the current traffic and conversion rates (if known)?',
        'What CMS or platform is it built on?'
      ]
    },
    { 
      title: 'SECTION 5: CONTENT & STRUCTURE', 
      questions: [
        'Do you already have content for the new website?',
        'Will you need help writing or editing content?',
        'Do you need photo/video content created or sourced?',
        'Is there an existing content strategy or tone of voice?',
        'What pages do you anticipate needing (e.g., Home, About, Services, Contact)?',
        'Do you want a blog or news section?',
        'Will your website include downloads, forms, galleries, or other special features?'
      ]
    },
    { 
      title: 'SECTION 6: DESIGN PREFERENCES', 
      questions: [
        'Do you have examples of websites you like? Please list URLs and what you like:',
        'What colors do you prefer or want to avoid?',
        'Should the design follow existing brand guidelines?',
        'Do you have any imagery or assets you’d like used?'
      ]
    },
    { 
      title: 'SECTION 7: TECHNICAL REQUIREMENTS', 
      questions: [
        'Should the website be mobile responsive?',
        'Do you need eCommerce capabilities?',
        'Do you require integration with third-party services (e.g., CRM, email marketing)?',
        'Do you need multilingual support?',
        'Should we include analytics tracking (e.g., Google Analytics)?',
        'Will the site need to comply with any regulations (e.g., GDPR, ADA)?'
      ]
    },
    { 
      title: 'SECTION 8: SEO & MARKETING', 
      questions: [
        'Is SEO important to you?',
        'Do you already have a domain name? If yes, what is it?',
        'Do you have existing social media profiles?',
        'Would you like help with digital marketing or ongoing SEO?'
      ]
    },
    { 
      title: 'SECTION 9: FUNCTIONALITY & FEATURES', 
      questions: [
        'List all required features:',
        'Are there features you’d like in future phases?'
      ]
    },
    { 
      title: 'SECTION 10: MAINTENANCE & UPDATES', 
      questions: [
        'Who will maintain and update the site after launch?',
        'Would you like training on how to manage the site?',
        'Are you interested in a maintenance package?'
      ]
    },
    { 
      title: 'SECTION 11: BUDGET & TIMELINE', 
      questions: [
        'Do you have an existing hosting provider?',
        'Will you need help choosing a host?',
        'Would you like training on how to update your site?',
        'What is your estimated budget range?',
        'What is your desired launch date?'
      ]
    },
    { 
      title: 'SECTION 12: ADDITIONAL NOTES', 
      questions: [
        'Are there any important deadlines we should know about?',
        'Is there anything else we should know?',
        'Questions or concerns you’d like addressed in the proposal:',
        'Any technical documents or proposals we should review?',
        'Any stakeholders we should be aware of?',
        'Additional expectations or concerns?'
      ]
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentSection < sections.length - 1) setCurrentSection(currentSection + 1);
  };

  const handlePrevious = () => {
    if (currentSection > 0) setCurrentSection(currentSection - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:5000/api/questionnaire', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert('Questionnaire submitted successfully!');
      navigate('/login');
    } catch (error) {
      alert('Error submitting questionnaire: ' + (error.response?.data?.message || 'Server error'));
    }
  };

  const renderSection = () => {
    const section = sections[currentSection];
    return (
      <div className="section-content">
        {currentSection === 0 && (
          <p className="brief-title">
            Client Website Brief Form<br/>
            <br></br>
            This document is designed to help us understand your business, goals, preferences, and technical needs before we provide a quotation or begin the design process. 
            Please fill it out as thoroughly as possible. 
            It will guide our proposal and ensure we build a site that reflects your vision.
          </p>
        )}
        <h2>{section.title}</h2>
        {currentSection === 8 && (
          <ul style={{ color: '#333333', margin: '10px 0', paddingLeft: '20px' }}>
          <h3>List all required features</h3>
            <li>E-commerce</li>
            <li>Appointment scheduling</li>
            <li>Social Media Integration</li>
            <li>Newsletter signup</li>
            <li>CRM integration</li>
            <li>User Login</li>
            <li>Downloadable content</li>
            <li>Video Embedding</li>
            <li>Interactive tools(e.g., calculators)</li>
            <li>Other (please specify)</li>
          </ul>
        )}
        {section.questions.map((question, index) => {
          const fieldName = `question_${currentSection}_${index}`;
          const placeholder = `Enter your ${question.toLowerCase().replace('?', '').replace(':', '').trim().split(' ').slice(-1)[0] || 'response'}`;
          return (
            <div key={fieldName} className="form-group">
              <label>{question}</label>
              <textarea
                id={fieldName}
                name={fieldName}
                value={formData[fieldName] || ''}
                onChange={handleChange}
                placeholder={placeholder}
                style={{ height: '60px' }}
              />
            </div>
          );
        })}
        {currentSection === sections.length - 1 && (
          <p style={{ textAlign: 'center', color: '#333333', marginTop: '20px' }}>
            Thank you for taking the time to complete this questionnaire. Your responses will help us craft a custom solution that fits your brand, goals, and audience. We'll follow up shortly with your project quote and next steps.
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="container questionnaire">
      <div className="header">
        <img src="/keylitelogo2.png" alt="Keylite Company Limited Logo" style={{ maxWidth: '250px', height: 'auto' }} />
        <p style={{
          fontSize: '20px',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '5px 0',
          backgroundImage: 'linear-gradient(to right, #0c2cfb, #f90c0e)',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}>Accelerate Development</p>
        <hr style={{ border: '0', height: '2px', backgroundColor: '#D32F2F', margin: '5px 0' }} />
      </div>
      {renderSection()}
      <hr style={{ border: '0', height: '5px', backgroundColor: '#D32F2F', margin: '5px 0' }} />
      <div className="navigation">
        {currentSection > 0 && <button onClick={handlePrevious}>Previous</button>}
        {currentSection < sections.length - 1 ? (
          <button onClick={handleNext}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
      
    </div>
  );
};

export default Questionnaire;