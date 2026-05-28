import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
          <ul>
            <li>
            const architectureNodes = [
              {
                title: 'DATABASE',
                tone: 'neutral',
                description: 'Stores users, doctors, appointments, documents, and notification records.',
              },
              {
                title: 'MODAL',
                tone: 'warm',
                description: 'Handles admin and user data operations, registration, and validation flows.',
                bullets: ['/db/Admin', '/db/User'],
              },
              {
                title: 'VIEW',
                tone: 'rose',
                description: 'Route-driven screens for landing, login, registration, dashboards, and booking.',
              },
              {
                title: 'CONTROLLER',
                tone: 'sky',
                description: 'Coordinates requests, responses, scheduling logic, and state transitions.',
              },
              {
                title: 'USER',
                tone: 'emerald',
                description: 'Patients, doctors, and admins interact with the system through secure workflows.',
              },
            ]

            const entityCards = [
              {
                title: 'Users',
                tag: 'Core identity',
                fields: ['notification', 'user_id', 'name', 'email', 'password', 'phone', 'type'],
                accent: 'sunset',
              },
              {
                title: 'Doctor',
                tag: 'Professional profile',
                fields: [
                  'phone_doc',
                  'specialization',
                  'fees',
                  'experience',
                  'status_doc',
                  'user_id(FK)',
                  'doctor_id',
                  'fullname',
                  'timing',
                ],
                accent: 'mint',
              },
              {
                title: 'Appointment',
                tag: 'Booking record',
                fields: [
                  'doctor_id(FK)',
                  'appointment_id',
                  'date',
                  'status_appt',
                  'document',
                  'doctorinfo',
                  'user_id(FK)_appt',
                ],
                accent: 'ocean',
              },
            ]

            const stackLayers = [
              { title: 'Frontend', chips: ['UI (React)', 'Booking flow', 'Dashboards'], tint: 'front' },
              { title: 'Backend', chips: ['Express JS', 'Node JS', 'Controller logic'], tint: 'back' },
              { title: 'Database', chips: ['Mongoose', 'MongoDB', 'Relations'], tint: 'db' },
            ]

            const userFlow = [
              'Opens landing page and registers as user or admin.',
              'Browses approved doctors, filters specialization, and checks slots.',
              'Books an appointment, uploads documents, and sends the request.',
              'Admin reviews doctor applications and approves or rejects them.',
              'Doctor receives the request, updates status, and sends notifications.',
              'User tracks appointment history and receives confirmations.',
            ]

            const roleHighlights = [
              {
                role: 'User',
                headline: 'Search, book, and track care',
                points: ['Register and sign in', 'View approved doctors', 'Book slots and upload reports'],
              },
              {
                role: 'Doctor',
                headline: 'Manage availability and bookings',
                points: ['Maintain profile and timing', 'Review appointments', 'Update visit status'],
              },
              {
                role: 'Admin',
                headline: 'Approve doctor onboarding',
                points: ['Verify doctor documents', 'Manage users and policies', 'Oversee platform activity'],
              },
            ]

            function App() {
                Explore Vite
                <main className="app-shell">
                  <section className="hero-panel">
                    <div className="hero-copy">
                      <p className="eyebrow">Book a Doctor System</p>
                      <h1>Healthcare booking flows, database entities, and controller logic in one build.</h1>
                      <p className="intro">
                        This frontend translates the diagrams into a single interface that shows the
                        architecture, entity relationships, stack layers, and user journey for patients,
                        doctors, and admins.
                      </p>
                      <div className="hero-actions">
                        <a className="primary-action" href="#flow">
                          View user flow
                        </a>
                        <a className="secondary-action" href="#database">
                          Inspect data model
                        </a>
                      </div>
                    </div>

                    <div className="hero-board">
                      <div className="flow-card flow-card--database">DATABASE</div>
                      <div className="flow-card flow-card--modal">
                        <span>MODAL</span>
                        <small>/db/Admin</small>
                        <small>/db/User</small>
                      </div>
                      <div className="flow-card flow-card--view">VIEW</div>
                      <div className="flow-card flow-card--controller">CONTROLLER</div>
                      <div className="flow-card flow-card--user">USER</div>
                      <div className="arrow arrow--db-modal" />
                      <div className="arrow arrow--modal-controller" />
                      <div className="arrow arrow--view-controller" />
                      <div className="arrow arrow--controller-user" />
                      <div className="labels labels--db">DB Operations</div>
                      <div className="labels labels--routes">Routes</div>
                      <div className="labels labels--request">Request</div>
                      <div className="labels labels--response">Response</div>
                    </div>
                  </section>

                  <section className="grid-section" id="roles">
                    {roleHighlights.map((item) => (
                      <article className="info-card role-card" key={item.role}>
                        <p className="card-kicker">{item.role}</p>
                        <h2>{item.headline}</h2>
                        <ul>
                          {item.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </section>

                  <section className="architecture-section" id="architecture">
                    <div className="section-heading">
                      <p className="eyebrow">System architecture</p>
                      <h2>Front view, controller layer, and persistent storage.</h2>
                    </div>
                    <div className="architecture-map">
                      {architectureNodes.map((node) => (
                        <article className={`arch-node arch-node--${node.tone}`} key={node.title}>
                          <h3>{node.title}</h3>
                          <p>{node.description}</p>
                          {node.bullets ? (
                            <ul>
                              {node.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                              ))}
                            </ul>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="stack-section" id="stack">
                    <div className="section-heading">
                      <p className="eyebrow">Technology stack</p>
                      <h2>React frontend, Node/Express backend, and MongoDB persistence.</h2>
                    </div>
                    <div className="stack-grid">
                      {stackLayers.map((layer) => (
                        <article className={`stack-layer stack-layer--${layer.tint}`} key={layer.title}>
                          <h3>{layer.title}</h3>
                          <div className="chip-row">
                            {layer.chips.map((chip) => (
                              <span className="chip" key={chip}>
                                {chip}
                              </span>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="database-section" id="database">
                    <div className="section-heading">
                      <p className="eyebrow">Entity model</p>
                      <h2>Users, doctors, and appointments keep the booking flow connected.</h2>
                    </div>
                    <div className="database-grid">
                      {entityCards.map((entity) => (
                        <article className={`entity-card entity-card--${entity.accent}`} key={entity.title}>
                          <div className="entity-card__top">
                            <div>
                              <p className="card-kicker">{entity.tag}</p>
                              <h3>{entity.title}</h3>
                            </div>
                          </div>
                          <div className="field-list">
                            {entity.fields.map((field) => (
                              <span className="field-pill" key={field}>
                                {field}
                              </span>
                            ))}
                          </div>
                        </article>
                      ))}
                    </div>
                  </section>

                  <section className="flow-section" id="flow">
                    <div className="section-heading">
                      <p className="eyebrow">User flow</p>
                      <h2>From registration to appointment history and notifications.</h2>
                    </div>
                    <div className="timeline">
                      {userFlow.map((step, index) => (
                        <div className="timeline-step" key={step}>
                          <div className="timeline-index">0{index + 1}</div>
                          <p>{step}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                </main>
