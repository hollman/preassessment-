import './style.css'

const questions = [
  { id: 'adhd_1', category: 'adhd', text: 'Do you often have difficulty sustaining attention during tasks or activities?' },
  { id: 'adhd_2', category: 'adhd', text: "Do you often feel like you're not listening when someone speaks directly to you?" },
  { id: 'adhd_3', category: 'adhd', text: 'Do you often struggle to follow through on instructions and fail to finish tasks or duties?' },
  { id: 'adhd_4', category: 'adhd', text: 'Do you find it difficult to organize tasks, activities, or your personal belongings?' },
  { id: 'adhd_5', category: 'adhd', text: 'Do you often avoid or dislike tasks that require sustained mental effort, like long forms or reading?' },
  { id: 'adhd_6', category: 'adhd', text: 'Do you frequently lose things necessary for tasks and daily activities, like keys, phones, or glasses?' },
  { id: 'adhd_7', category: 'adhd', text: 'Are you easily distracted by unrelated thoughts or external stimuli?' },
  { id: 'adhd_8', category: 'adhd', text: 'Do you often fidget with your hands or feet, or squirm when you have to sit still?' },
  { id: 'adhd_9', category: 'adhd', text: 'Do you often feel restless or have an internal feeling of being driven by a motor?' },
  { id: 'adhd_10', category: 'adhd', text: "Do you tend to blurt out answers before a question has been fully asked, or finish other people's sentences?" },
  { id: 'adhd_11', category: 'adhd', text: 'Do you find it highly frustrating or difficult to wait your turn in lines or conversations?' },
  { id: 'asd_1', category: 'asdClassic', text: 'Do you find it difficult to understand the unwritten rules of social situations?' },
  { id: 'asd_2', category: 'asdClassic', text: 'Do you strongly prefer to do things the exact same way over and over again?' },
  { id: 'asd_4', category: 'asdClassic', text: 'Do you become very upset, anxious, or distressed by unexpected changes in your routine or plans?' },
  { id: 'asd_5', category: 'asdClassic', text: 'Do you have highly intense, specific interests that you spend a lot of time researching or talking about?' },
  { id: 'asd_6', category: 'asdClassic', text: 'Do you find making or maintaining eye contact uncomfortable or distracting when talking to someone?' },
  { id: 'asd_7', category: 'asdClassic', text: 'Do you tend to take things very literally and sometimes miss sarcasm, jokes, or hidden meanings?' },
  { id: 'asd_8', category: 'asdClassic', text: 'Do you easily feel overwhelmed by sensory input, such as loud noises, bright lights, or certain textures?' },
  { id: 'asd_9', category: 'asdClassic', text: 'Do you make repetitive physical movements, like rocking, tapping, or hand-flapping, to calm down or express excitement?' },
  { id: 'asd_10', category: 'asdClassic', text: 'Do you find small talk or casual, unstructured conversation to be exhausting or confusing?' },
  { id: 'mod_1', category: 'asdModern', text: 'Do you consciously study how other people interact so you can copy them and appear normal?' },
  { id: 'mod_2', category: 'asdModern', text: 'Do you often feel exhausted after social interactions because of the effort it takes to hide your natural behaviors?' },
  { id: 'mod_3', category: 'asdModern', text: 'Have you experienced periods where you lose skills you previously had, like speaking or organizing, due to prolonged stress?' },
  { id: 'mod_4', category: 'asdModern', text: 'When engaged in a task you care about, do you find it almost impossible to shift your attention to something else?' },
  { id: 'mod_5', category: 'asdModern', text: 'Do you experience a strong internal resistance or panic when someone places a demand or expectation on you?' },
  { id: 'mod_6', category: 'asdModern', text: "Do you physically feel other people's emotions or get easily overwhelmed by the vibe of a room?" },
  { id: 'mod_7', category: 'asdModern', text: 'Do you struggle to initiate tasks even when you desperately want or need to do them?' },
  { id: 'mod_8', category: 'asdModern', text: 'Do you need significant downtime in a dark or quiet space to recover from a typical day?' },
  { id: 'mod_9', category: 'asdModern', text: 'Do you prefer communicating via text rather than speaking because it allows you time to process and formulate responses?' },
  { id: 'mod_10', category: 'asdModern', text: 'Do you suppress the urge to move, fidget, or make sounds in public to avoid drawing attention to yourself?' },
  { id: 'mod_11', category: 'asdModern', text: 'Do you feel like you have multiple different personalities depending on which social group you are interacting with?' },
  { id: 'mod_13', category: 'asdModern', text: 'Do you mentally rehearse conversations before they happen to ensure you say the right things?' },
  { id: 'mod_15', category: 'asdModern', text: 'Does your tolerance for sensory input, like noise or light, drastically drop when you are stressed or tired?' },
  { id: 'mod_16', category: 'asdModern', text: 'When deeply engaged in a specific interest, do you often forget to eat, drink, or use the bathroom?' },
  { id: 'mod_17', category: 'asdModern', text: 'Do you get stuck in waiting mode when you have an appointment later in the day, unable to focus on anything else beforehand?' },
  { id: 'mod_20', category: 'asdModern', text: "Do you feel a profound, sometimes painful, sense of injustice when witnessing unfairness, even if it doesn't affect you directly?" },
  { id: 'mod_21', category: 'asdModern', text: 'Do you feel an intense need to be in absolute control of your own schedule and environment to feel safe?' },
  { id: 'mod_23', category: 'asdModern', text: 'Do you need to understand all the small, specific details of a plan or concept before you can understand the overall goal?' },
  { id: 'asq_1', category: 'asdAsq', text: 'Do you strongly prefer to do things on your own rather than with others?' },
  { id: 'asq_2', category: 'asdAsq', text: 'Do you frequently get so strongly absorbed in one thing that you lose sight of other things happening around you?' },
  { id: 'asq_3', category: 'asdAsq', text: 'Do you often notice small sounds when others do not?' },
  { id: 'asq_4', category: 'asdAsq', text: 'Do you usually notice details like car license plates, specific dates, or similar strings of information?' },
  { id: 'asq_6', category: 'asdAsq', text: 'Do you find yourself drawn more strongly to understanding things, objects, and systems rather than people?' },
  { id: 'asq_7', category: 'asdAsq', text: 'When you talk about your interests, does it often seem hard for others to get a word in edgeways?' },
  { id: 'asq_8', category: 'asdAsq', text: 'Are you fascinated by numbers, patterns, or categorizing specific types of information?' },
  { id: 'asq_9', category: 'asdAsq', text: "When reading a story or watching a movie, do you find it difficult to work out the characters' unspoken intentions or feelings?" },
  { id: 'asq_11', category: 'asdAsq', text: "When you talk on the phone, are you unsure when it's your turn to speak?" },
  { id: 'asq_12', category: 'asdAsq', text: 'Do you tend to notice details of a situation or object before you notice the big picture?' }
]

const options = [
  { label: 'Never', value: 0 },
  { label: 'Rarely', value: 1 },
  { label: 'Sometimes', value: 2 },
  { label: 'Often', value: 3 },
  { label: 'Very Often', value: 4 }
]

const categoryLabels = {
  adhd: 'ADHD traits',
  asdClassic: 'Autism traits: classic/DSM-oriented',
  asdModern: 'Autism traits: internalized/masking/burnout-oriented',
  asdAsq: 'Autism-spectrum quotient-style traits'
}

const categoryDescriptions = {
  adhd: 'Attention regulation, impulsivity, restlessness, and executive follow-through.',
  asdClassic: 'Observable social-communication, routine, literalness, sensory, and repetitive-behavior traits.',
  asdModern: 'Masking, burnout, demand sensitivity, inertia, sensory depletion, and internal social effort.',
  asdAsq: 'Systemizing, detail-focus, absorption, pattern attention, and social inference traits.'
}

function getLevel(percent) {
  if (percent < 35) return { text: 'Lower screen signal', className: 'low' }
  if (percent < 65) return { text: 'Moderate screen signal', className: 'moderate' }
  return { text: 'Elevated screen signal', className: 'elevated' }
}

function emptyScores() {
  return Object.keys(categoryLabels).reduce((acc, category) => {
    acc[category] = { raw: 0, max: 0, percent: 0, level: getLevel(0) }
    return acc
  }, {})
}

function calculateScores() {
  const scores = emptyScores()

  questions.forEach((question) => {
    const selected = document.querySelector(`input[name="${question.id}"]:checked`)
    const value = selected ? Number(selected.value) : 0
    scores[question.category].raw += value
    scores[question.category].max += 4
  })

  Object.keys(scores).forEach((category) => {
    const score = scores[category]
    score.percent = Math.round((score.raw / score.max) * 100)
    score.level = getLevel(score.percent)
  })

  return scores
}

function generateProfile(scores) {
  const notes = []

  if (scores.asdModern.percent >= 65 && scores.asdClassic.percent < 50) {
    notes.push({
      title: 'High internalized/autistic-masking signal',
      text: 'Responses are stronger on masking, burnout, demand sensitivity, task inertia, and sensory depletion than on externally visible classic traits. That pattern can be consistent with high-masking autism, but this tool cannot determine diagnosis.'
    })
  } else if (scores.asdClassic.percent >= 65 && scores.asdModern.percent >= 65) {
    notes.push({
      title: 'Broad autism-trait signal',
      text: 'Responses are elevated across both classic/observable and internalized trait clusters. This is a stronger screen-level reason to consider formal autism evaluation, especially if traits create impairment or chronic exhaustion.'
    })
  }

  if (scores.adhd.percent >= 65) {
    notes.push({
      title: 'Prominent ADHD-trait signal',
      text: 'Responses are elevated for attention regulation, follow-through, organization, restlessness, and impulse timing. If autism-trait scores are also elevated, the lived presentation may involve competing attention, sensory, and executive-function needs.'
    })
  }

  if (scores.asdAsq.percent >= 65 && scores.asdClassic.percent < 50 && scores.asdModern.percent < 50) {
    notes.push({
      title: 'Systemizing/detail-focused cognitive style',
      text: 'Responses suggest strong pattern, detail, absorption, and systems-oriented traits without an equally strong distress or social-communication signal. That may represent cognitive style rather than clinical impairment.'
    })
  }

  if (scores.asdModern.percent < 35) {
    notes.push({ title: 'Low internalized autism-trait signal', text: 'Masking, burnout, demand sensitivity, and sensory depletion were not strongly endorsed.' })
  }
  if (scores.asdClassic.percent < 35) {
    notes.push({ title: 'Low classic autism-trait signal', text: 'Traditional observable autism markers were not strongly endorsed.' })
  }
  if (scores.adhd.percent < 35) {
    notes.push({ title: 'Low ADHD-trait signal', text: 'Attention regulation, restlessness, and executive-function items were not strongly endorsed.' })
  }
  if (scores.asdAsq.percent < 35) {
    notes.push({ title: 'Low systemizing/detail-focus signal', text: 'Pattern-recognition and detail-focused items were not strongly endorsed.' })
  }

  if (!notes.length) {
    notes.push({
      title: 'Moderate/mixed screen profile',
      text: 'Scores sit mostly in the middle range and do not strongly cluster into one profile. Interpretation depends heavily on impairment, onset, context, and whether symptoms are lifelong versus recent.'
    })
  }

  return notes
}

function generateGuidance(scores) {
  const elevated = Object.values(scores).some((score) => score.percent >= 65)
  const moderate = Object.values(scores).some((score) => score.percent >= 35)

  if (elevated) {
    return {
      title: 'Formal assessment is reasonable to consider',
      text: 'At least one trait cluster is elevated. A clinical assessment is more strongly warranted if the traits are lifelong, occur across settings, and cause functional impairment, burnout, relationship friction, occupational friction, or need for accommodations.'
    }
  }

  if (moderate) {
    return {
      title: 'Assessment depends on impairment and history',
      text: 'Moderate scores can reflect neurodivergent traits, stress, sleep disruption, anxiety, depression, trauma, medical issues, or context-specific overload. Formal evaluation is most useful when the pattern is persistent and practically consequential.'
    }
  }

  return {
    title: 'Low screen-level indication',
    text: 'Scores do not strongly suggest a need for formal ADHD/autism assessment on this item set alone. This does not rule out either condition, especially if the person has strong compensatory strategies or atypical presentation.'
  }
}

function renderQuestions() {
  const container = document.querySelector('#questions')
  const grouped = questions.reduce((acc, question) => {
    if (!acc[question.category]) acc[question.category] = []
    acc[question.category].push(question)
    return acc
  }, {})

  container.innerHTML = Object.entries(grouped).map(([category, items]) => `
    <section class="question-section" aria-labelledby="${category}-heading">
      <div class="section-heading">
        <h2 id="${category}-heading">${categoryLabels[category]}</h2>
        <p>${categoryDescriptions[category]}</p>
      </div>
      ${items.map((question) => renderQuestion(question)).join('')}
    </section>
  `).join('')
}

function renderQuestion(question) {
  return `
    <fieldset class="question-card">
      <legend>${question.text}</legend>
      <div class="options">
        ${options.map((option) => `
          <label class="option">
            <input type="radio" name="${question.id}" value="${option.value}" ${option.value === 0 ? 'checked' : ''} />
            <span>${option.label}</span>
          </label>
        `).join('')}
      </div>
    </fieldset>
  `
}

function renderResults(scores) {
  const profile = generateProfile(scores)
  const guidance = generateGuidance(scores)
  const results = document.querySelector('#results')

  results.innerHTML = `
    <div class="results-panel" role="status" aria-live="polite">
      <div class="results-header">
        <h2>Assessment results</h2>
        <p>Screening output only. Not a diagnosis, medical advice, or validated replacement for ASRS, AQ, RAADS-R, CAT-Q, ADOS-2, DIVA-5, or clinician assessment.</p>
      </div>

      <div class="score-grid">
        ${Object.entries(scores).map(([category, score]) => `
          <article class="score-card ${score.level.className}">
            <div class="score-topline">
              <h3>${categoryLabels[category]}</h3>
              <strong>${score.percent}%</strong>
            </div>
            <div class="bar" aria-hidden="true"><span style="width:${score.percent}%"></span></div>
            <p><b>${score.level.text}</b> · ${score.raw} / ${score.max}</p>
          </article>
        `).join('')}
      </div>

      <section class="result-section">
        <h3>Trait profile</h3>
        <ul class="profile-list">
          ${profile.map((item) => `<li><b>${item.title}:</b> ${item.text}</li>`).join('')}
        </ul>
      </section>

      <section class="result-section guidance">
        <h3>${guidance.title}</h3>
        <p>${guidance.text}</p>
      </section>

      <div class="actions secondary-actions">
        <button type="button" id="copy-results">Copy results</button>
        <button type="button" id="print-results">Print / save PDF</button>
      </div>
    </div>
  `

  document.querySelector('#copy-results').addEventListener('click', () => copyResults(scores, guidance))
  document.querySelector('#print-results').addEventListener('click', () => window.print())
  results.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

async function copyResults(scores, guidance) {
  const lines = [
    'Neurodivergence pre-assessment results',
    '',
    ...Object.entries(scores).map(([category, score]) => `${categoryLabels[category]}: ${score.percent}% (${score.raw}/${score.max}) - ${score.level.text}`),
    '',
    `${guidance.title}: ${guidance.text}`
  ]

  try {
    await navigator.clipboard.writeText(lines.join('\n'))
    const button = document.querySelector('#copy-results')
    button.textContent = 'Copied'
    setTimeout(() => { button.textContent = 'Copy results' }, 1400)
  } catch {
    window.prompt('Copy results:', lines.join('\n'))
  }
}

function resetForm() {
  document.querySelectorAll('input[type="radio"][value="0"]').forEach((input) => {
    input.checked = true
  })
  document.querySelector('#results').innerHTML = ''
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function init() {
  document.querySelector('#app').innerHTML = `
    <main class="app-shell">
      <header class="hero">
        <p class="eyebrow">Screening tool</p>
        <h1>Neurodivergence Pre-Assessment</h1>
        <p class="lede">A lightweight self-report screener for ADHD traits, classic autism traits, internalized/masking-oriented autism traits, and AQ-style systemizing traits.</p>
        <div class="notice">
          <b>Use constraint:</b> This is an exploratory screening tool. It is not clinically validated as a standalone diagnostic instrument and does not collect or transmit responses.
        </div>
      </header>

      <form id="assessment-form">
        <div id="questions"></div>
        <div class="actions sticky-actions">
          <button type="submit">Calculate results</button>
          <button type="button" class="ghost" id="reset-form">Reset</button>
        </div>
      </form>

      <section id="results" aria-label="Assessment results"></section>
    </main>
  `

  renderQuestions()

  document.querySelector('#assessment-form').addEventListener('submit', (event) => {
    event.preventDefault()
    renderResults(calculateScores())
  })

  document.querySelector('#reset-form').addEventListener('click', resetForm)
}

init()
