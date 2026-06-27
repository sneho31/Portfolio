// --- PROJECT DATABASE ---
const PROJECTS_DB = {
  main: {
    title: "SYSTEM DEPLOYMENTS LOG",
    tag: "Active Directory // Sneho.OS Modules",
    body: `
      These are the currently running project deployments mapped in the central storage unit. You can view individual details or query them directly through the terminal shell.
      <br><br>
      <strong>1. DisciPlan:</strong> A centralized academic operating system and gamified task-management engine designed to unite students and faculty.
    `,
    tech: ["React 19", "TypeScript", "FastAPI", "MySQL"],
    liveLink: "disciplan.html",
    repoLink: "https://github.com/nahinio/disciplan-frontend"
  },
  disciplan: {
    title: "DISCIPLAN // GAMIFIED ACADEMIC OS",
    tag: "Academic Second Brain & Scheduler",
    body: "A centralized academic operating system and gamified task-management engine designed to unite students and faculty. Features adaptive energy-aware scheduling algorithms.",
    tech: ["React 19", "TypeScript", "FastAPI", "MySQL"],
    liveLink: "disciplan.html",
    repoLink: "https://github.com/nahinio/disciplan-frontend"
  }
};

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  // Start system tickers
  startClock();
  startMetricTicker();
  initTerminal();
  initThemeToggle();

  // Populate dynamic project counter
  const counterEl = document.getElementById("proj-counter");
  if (counterEl) {
    const projectCount = Object.keys(PROJECTS_DB).length - 1; // Exclude 'main'
    counterEl.innerText = `0${projectCount}`;
  }

  // Bind contact form submit event
  const contactForm = document.getElementById("transmitter-form");
  if (contactForm) {
    contactForm.addEventListener("submit", transmitSignal);
  }
});

// --- THEME MODULE ---
function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  if (!toggleBtn) return;

  const labelEl = toggleBtn.querySelector(".toggle-label");

  function updateThemeUI(isLight) {
    if (isLight) {
      document.body.classList.add("light-theme");
      if (labelEl) labelEl.innerText = "DARK_MODE";
    } else {
      document.body.classList.remove("light-theme");
      if (labelEl) labelEl.innerText = "LIGHT_MODE";
    }
  }

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  const isLightMode = savedTheme !== "dark";
  
  updateThemeUI(isLightMode);
  // Log initial theme load to terminal after a tiny delay to ensure terminal is rendered
  setTimeout(() => {
    logSystemMessage(`SYS_THEME // ${isLightMode ? "Light" : "Dark"} mode theme config initialized.`);
  }, 100);

  toggleBtn.addEventListener("click", () => {
    const isNowLight = !document.body.classList.contains("light-theme");
    updateThemeUI(isNowLight);
    localStorage.setItem("theme", isNowLight ? "light" : "dark");
    
    // Log toggle event to terminal
    logSystemMessage(`SYS_THEME // Theme modulated to ${isNowLight ? "LIGHT" : "DARK"} mode.`);
  });
}

// --- CLOCK MODULE ---
function startClock() {
  const clockEl = document.getElementById("utc-clock");
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const timeStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
    clockEl.innerText = timeStr;
  }
  
  update();
  setInterval(update, 1000);
}

// --- DYNAMIC SYSTEM METRICS ---
function startMetricTicker() {
  const tempEl = document.getElementById("temp-val");
  
  setInterval(() => {
    // Fluctuating system temperature slightly to simulate actual processing
    const baseTemp = 37.0;
    const fluctuation = (Math.random() * 2.5).toFixed(1);
    const currentTemp = (baseTemp + parseFloat(fluctuation)).toFixed(1);
    if (tempEl) tempEl.innerText = `${currentTemp}°C`;
  }, 3000);
}

// --- ADSR SKILLS CONTROLLER REMOVED ---

// --- INTERACTIVE TERMINAL EMULATOR ---
const COMMANDS = {
  help: () => `
Available commands:
  about    - Return unit identity and biographical log
  skills   - Print tech stack and mastery ratios
  projects - Display index of active deployments
  contact  - Output communications coordinates
  temp     - Report system CPU core temperatures
  date     - Show current Epoch and standard timestamps
  clear    - Flush terminal console lines
  secret   - Unlock developer mode matrix override
  `,
  about: () => `
UNIT IDENTITY: SNEHO
DESIGNATION:   2nd-year CS Undergrad
BIOLOGICAL:    Active Node. Human developer based on Earth coordinates.
MISSION:       Exploring the tech landscape. Currently focusing on mobile app
               development using Flutter while continuously learning new technologies
               to locate the ultimate niche in software development.
`,
  skills: () => `
SYSTEM MODULE CAPACITIES:
=========================================
MODULE             | CODE      | CAPACITY
=========================================
JAVASCRIPT         | JS-ES6    | [|||||||||.] 90%
HTML5 / CSS3       | HT-CS3    | [||||||||||] 95%
REACT & VUE        | FR-WRK    | [||||||||..] 85%
NODEJS & GRAPHQL   | ND-GQL    | [|||||||...] 75%
GLSL & WEBGPU      | SH-DRS    | [||||||....] 60%
=========================================
  `,
  projects: () => `
SYSTEM DEPLOYMENTS REGISTERED:
-----------------------------------------
[01] DISCIPLAN [Active]
     Gamified academic Operating System & task planner.
     Query: "project disciplan" for details.
-----------------------------------------
Type "project [name]" for individual node details.
  `,
  contact: () => `
COMMUNICATION PROTOCOL DETAILS:
-----------------------------------------
SIGNAL PATH:   masudparvessneho@gmail.com
GITHUB LINK:   github.com
CODEFORCES:    codeforces.com/profile/masudparvessneho
STATUS:        OPEN FOR COMMISSIONS // CONTRACTS
-----------------------------------------
Use Card 06 to transmit signals directly.
  `,
  temp: () => {
    const cores = [
      (35 + Math.random() * 8).toFixed(1),
      (36 + Math.random() * 8).toFixed(1),
      (34 + Math.random() * 7).toFixed(1),
      (38 + Math.random() * 9).toFixed(1)
    ];
    return `
DIAGNOSTIC REPORT // CPU THERMAL SENSORS:
-----------------------------------------
CORE 0: [${cores[0]}°C] - ONLINE
CORE 1: [${cores[1]}°C] - ONLINE
CORE 2: [${cores[2]}°C] - STABLE
CORE 3: [${cores[3]}°C] - ELEVATED LOAD
COOLING FAN SPEED: 4200 RPM // STATUS: STABLE
    `;
  },
  date: () => `
SYSTEM TIMESTAMPS:
-----------------------------------------
EPOCH TIME:  ${Math.floor(Date.now() / 1000)}
ISO TIME:    ${new Date().toISOString()}
LOCAL TIME:  ${new Date().toLocaleString()}
-----------------------------------------
  `,
  secret: () => {
    // Trigger matrix-like color overlay or secret alert
    setTimeout(() => {
      document.body.style.textShadow = '0 0 5px #00ff00';
      const indicator = document.querySelector('.status-indicator');
      if (indicator) {
        indicator.style.backgroundColor = '#ff003c';
        indicator.style.boxShadow = '0 0 10px #ff003c';
      }
    }, 100);
    return `
[!!! OVERRIDE DETECTED !!!]
Developer mode overrides compiled.
Visual text-shadow elements modulated.
Status node illuminated RED.
System integrity compromise level: 0.04%
    `;
  }
};

function initTerminal() {
  const terminalInput = document.getElementById("terminal-textbox");
  if (!terminalInput) return;

  terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const commandLine = terminalInput.value.trim();
      terminalInput.value = "";
      if (commandLine === "") return;

      processCommand(commandLine);
    }
  });
}

function processCommand(rawCommand) {
  const display = document.getElementById("terminal-display");
  if (!display) return;

  // Append user input
  const userLine = document.createElement("div");
  userLine.className = "terminal-line command";
  userLine.innerText = `guest@sneho-os:~$ ${rawCommand}`;
  display.appendChild(userLine);

  const normalized = rawCommand.toLowerCase().replace(/\s+/g, ' ');
  let responseText = "";
  let isError = false;

  // Check custom commands or query project details
  if (COMMANDS[normalized]) {
    responseText = COMMANDS[normalized]();
  } else if (normalized.startsWith("project ")) {
    const projName = normalized.substring(8).trim();
    const cleanName = projName.replace(/[-_]/g, '');
    if (PROJECTS_DB[cleanName]) {
      const proj = PROJECTS_DB[cleanName];
      responseText = `
PROJECT DATA SHEET: ${proj.title}
=========================================
TYPE:        ${proj.tag}
STACK:       ${proj.tech.join(", ")}
DESCRIPTION: ${proj.body.replace(/<br>/g, '\n').replace(/<\/?[^>]+(>|$)/g, "")}
=========================================
      `;
    } else {
      responseText = `QUERY FAILED: No database matches found for deployment "${projName}".`;
      isError = true;
    }
  } else if (normalized === "clear") {
    display.innerHTML = "";
    responseText = "Console log flushed. SNEHO-OS active.";
  } else {
    responseText = `COMMAND FAILED: Command "${rawCommand}" not recognized. Type "help" for a list of active system commands.`;
    isError = true;
  }

  // Append response
  if (responseText) {
    const responseLine = document.createElement("div");
    responseLine.className = `terminal-line ${isError ? 'error' : 'response'}`;
    responseLine.innerText = responseText;
    display.appendChild(responseLine);
  }

  // Scroll to bottom
  display.scrollTop = display.scrollHeight;
}

// Log generic logs/messages to terminal from outside actions
function logSystemMessage(msg) {
  const display = document.getElementById("terminal-display");
  if (!display) return;

  const line = document.createElement("div");
  line.className = "terminal-line system";
  line.innerText = msg;
  display.appendChild(line);

  display.scrollTop = display.scrollHeight;
}

// --- PROJECT DETAIL MODALS ---
function openProjectModal(projectId) {
  const modal = document.getElementById("project-modal");
  const data = PROJECTS_DB[projectId] || PROJECTS_DB.main;
  
  if (!modal) return;

  document.getElementById("modal-title").innerText = data.title;
  document.getElementById("modal-tag").innerText = data.tag;
  document.getElementById("modal-body").innerHTML = data.body;
  
  // Populate badges
  const badgeContainer = document.getElementById("modal-tech");
  badgeContainer.innerHTML = "";
  data.tech.forEach(tech => {
    const badge = document.createElement("span");
    badge.className = "tech-badge";
    badge.innerText = tech;
    badgeContainer.appendChild(badge);
  });

  // Link setup
  const liveBtn = document.getElementById("modal-link-live");
  const repoBtn = document.getElementById("modal-link-repo");
  
  if (data.liveLink) {
    liveBtn.href = data.liveLink;
    liveBtn.style.display = "inline-block";
  } else {
    liveBtn.style.display = "none";
  }

  if (data.repoLink) {
    repoBtn.href = data.repoLink;
    repoBtn.style.display = "inline-block";
  } else {
    repoBtn.style.display = "none";
  }

  modal.classList.add("active");
  logSystemMessage(`UI // Dialog box [${data.title}] rendered in main viewport.`);
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (modal) {
    modal.classList.remove("active");
    logSystemMessage(`UI // Viewport modal dismissed.`);
  }
}

// Close modal with Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
  }
});

// --- COMMS BEAM / FORM SUBMIT ---
function transmitSignal(e) {
  const name = document.getElementById("comms-name").value;
  const email = document.getElementById("comms-email").value;
  const message = document.getElementById("comms-msg").value;
  const statusEl = document.getElementById("transmit-status");

  // Set the pre-filled parameters for Gmail GET submission
  document.getElementById("gmail-su").value = `Portfolio Signal from ${name}`;
  document.getElementById("gmail-body").value = `Sender Return Path: ${email}\n\nMessage:\n${message}`;

  if (statusEl) {
    statusEl.innerText = "SIGNAL OPENED IN GMAIL";
    statusEl.style.color = "var(--color-green)";
  }

  // Clear inputs after browser processes the native submit
  setTimeout(() => {
    const contactForm = document.getElementById("transmitter-form");
    if (contactForm) contactForm.reset();
  }, 100);

  // Print event directly to the terminal
  logSystemMessage(`COMMS // Connection request from node [${name}] via path [${email}] successfully beamed to Gmail.`);
}
