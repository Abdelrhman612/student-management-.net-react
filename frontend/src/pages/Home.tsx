import React from 'react'
import { Button, Container, Row, Col, Navbar, Nav, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { 
  FaGraduationCap, 
  FaUsers, 
  FaChartLine, 
  FaShieldAlt,
  FaArrowRight,
  FaStar,
  FaCheck
} from 'react-icons/fa'

const LandingPage: React.FC = () => {
  const navigate = useNavigate()

  const features = [
    {
      icon: <FaUsers className="text-primary" size={40} />,
      title: "إدارة الطلاب",
      description: "إدارة سجلات الطلاب بسهولة وكفاءة مع واجهة بديهية"
    },
    {
      icon: <FaChartLine className="text-success" size={40} />,
      title: "تقارير متقدمة",
      description: "احصل على تقارير وتحليلات مفصلة عن أداء الطلاب"
    },
    {
      icon: <FaShieldAlt className="text-warning" size={40} />,
      title: "آمن ومحمي",
      description: "بيئة آمنة مع حماية كاملة للبيانات والحسابات"
    },
    {
      icon: <FaGraduationCap className="text-info" size={40} />,
      title: "تتبع التقدم",
      description: "تابع تقدم الطلاب الأكاديمي بشكل مستمر ومنظم"
    }
  ]

  const testimonials = [
    {
      name: "أ. محمد أحمد",
      role: "مدير مدرسة",
      text: "النظام ساعدنا في تنظيم العمل بشكل رائع",
      rating: 5
    },
    {
      name: "د. سارة خالد",
      role: "مشرفة أكاديمية",
      text: "واجهة سهلة الاستخدام ووظائف شاملة",
      rating: 5
    }
  ]

  return (
    <div className="landing-page">
      <Navbar bg="white" variant="light" expand="lg" className="shadow-sm py-3" fixed="top">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-primary d-flex align-items-center">
            <FaGraduationCap className="me-2" />
            StudentMgmt
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">المميزات</Nav.Link>
              <Nav.Link href="#testimonials">آراء العملاء</Nav.Link>
              <Nav.Link href="#pricing">الأسعار</Nav.Link>
            </Nav>
            <Nav>
              <Button 
                variant="outline-primary" 
                className="me-2" 
                onClick={() => navigate('/signin')}
              >
                تسجيل الدخول
              </Button>
              <Button 
                variant="primary" 
                onClick={() => navigate('/signup')}
                className="d-flex align-items-center"
              >
                ابدأ الآن <FaArrowRight className="ms-2" />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="hero-section bg-gradient-primary text-white" style={{ paddingTop: '100px', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="hero-content">
                <div className="badge bg-light text-primary px-3 py-2 rounded-pill mb-3 fw-bold">
                  🎓 نظام إدارة الطلاب المتكامل
                </div>
                <h1 className="display-4 fw-bold mb-4">
                  إدارة الطلاب 
                  <span className="text-warning"> بكل سهولة</span>
                </h1>
                <p className="lead mb-4 fs-5">
                  نظام متكامل لإدارة الطلاب، المهام، والتقارير. وفر وقتك وركز على ما يهم حقاً - تعليم الطلاب.
                </p>
                <div className="hero-stats d-flex gap-4 mb-4">
                  <div>
                    <h4 className="fw-bold text-warning">+500</h4>
                    <p className="mb-0">مؤسسة تعليمية</p>
                  </div>
                  <div>
                    <h4 className="fw-bold text-warning">+50,000</h4>
                    <p className="mb-0">طالب مسجل</p>
                  </div>
                  <div>
                    <h4 className="fw-bold text-warning">98%</h4>
                    <p className="mb-0">رضا العملاء</p>
                  </div>
                </div>
                <div className="hero-buttons d-flex gap-3 flex-wrap">
                  <Button 
                    variant="warning" 
                    size="lg" 
                    className="px-4 py-2 fw-bold"
                    onClick={() => navigate('/signup')}
                  >
                    ابدأ مجانًا <FaArrowRight className="ms-2" />
                  </Button>
                  <Button 
                    variant="outline-light" 
                    size="lg"
                    className="px-4 py-2"
                    onClick={() => navigate('/signin')}
                  >
                    مشاهدة العرض
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              <div className="hero-visual text-center">
                <div className="dashboard-preview bg-white rounded-4 shadow-lg p-4">
                  <div className="d-flex gap-2 mb-3">
                    <div className="bg-primary rounded" style={{width: '60px', height: '8px'}}></div>
                    <div className="bg-success rounded" style={{width: '40px', height: '8px'}}></div>
                    <div className="bg-warning rounded" style={{width: '30px', height: '8px'}}></div>
                  </div>
                  <div className="row g-3 mb-3">
                    <div className="col-4">
                      <div className="bg-light rounded-3 p-3 text-dark">
                        <small>إجمالي الطلاب</small>
                        <h6 className="mb-0 fw-bold">1,248</h6>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="bg-light rounded-3 p-3 text-dark">
                        <small>نشط اليوم</small>
                        <h6 className="mb-0 fw-bold">894</h6>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="bg-light rounded-3 p-3 text-dark">
                        <small>معدل النجاح</small>
                        <h6 className="mb-0 fw-bold">94%</h6>
                      </div>
                    </div>
                  </div>
                  <div className="bg-light rounded-3 p-3 text-dark">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <small>أحدث النشاطات</small>
                      <span className="badge bg-primary">جديد</span>
                    </div>
                    <div className="activity-list">
                      {['تسجيل طالب جديد', 'تحديث الدرجات', 'إشعار جديد'].map((activity, index) => (
                        <div key={index} className="d-flex align-items-center gap-2 mb-2">
                          <FaCheck className="text-success" size={12} />
                          <small>{activity}</small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="features" className="py-5 bg-light">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-3">لماذا تختار نظامنا؟</h2>
              <p className="lead text-muted">
                نوفر لك جميع الأدوات التي تحتاجها لإدارة مؤسستك التعليمية بكفاءة
              </p>
            </Col>
          </Row>
          <Row>
            {features.map((feature, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm hover-shadow">
                  <Card.Body className="text-center p-4">
                    <div className="mb-3">{feature.icon}</div>
                    <h5 className="fw-bold mb-3">{feature.title}</h5>
                    <p className="text-muted">{feature.description}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>


      <section id="testimonials" className="py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-3">ماذا يقول عملاؤنا؟</h2>
            </Col>
          </Row>
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={6} key={index} className="mb-4">
                <Card className="border-0 shadow-sm">
                  <Card.Body className="p-4">
                    <div className="d-flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-warning me-1" />
                      ))}
                    </div>
                    <p className="fst-italic mb-4">"{testimonial.text}"</p>
                    <div className="d-flex align-items-center">
                      <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center text-white me-3" style={{width: '50px', height: '50px'}}>
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

  
      <section className="py-5 bg-primary text-white">
        <Container>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 fw-bold mb-3">جاهز للبدء؟</h2>
              <p className="lead mb-4">
                انضم إلى آلاف المؤسسات التعليمية التي تستخدم نظامنا
              </p>
              <Button 
                variant="warning" 
                size="lg" 
                className="px-5 py-2 fw-bold"
                onClick={() => navigate('/signup')}
              >
                ابدأ مجانًا اليوم <FaArrowRight className="ms-2" />
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="d-flex align-items-center">
                <FaGraduationCap className="me-2 text-primary" />
                <span className="fw-bold">StudentMgmt</span>
              </div>
              <small className="text-muted">
                © 2024 نظام إدارة الطلاب. جميع الحقوق محفوظة.
              </small>
            </Col>
            <Col md={6} className="text-md-end">
              <small className="text-muted">
                صنع بحب ❤️ للتعليم
              </small>
            </Col>
          </Row>
        </Container>
      </footer>

      <style>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .hover-shadow {
          transition: all 0.3s ease;
        }
        .hover-shadow:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1) !important;
        }
        .dashboard-preview {
          transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .hero-stats div {
          text-align: center;
        }
        .hero-stats h4 {
          font-size: 1.5rem;
        }
        @media (max-width: 768px) {
          .hero-stats {
            justify-content: center;
          }
          .display-4 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </div>
  )
}

export default LandingPage