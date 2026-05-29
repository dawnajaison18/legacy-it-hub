/* ============================================================
   CONTENT — edit this object to add your own topics & steps.
   Each step can be plain text or {text, note}.
   ============================================================ */
const DATA = {
  insync: {
    name:"InSync EHR", icon:"🩺",
    blurb:"Qualifacts InSync workflows — portal, insurance, providers and more.",
    topics:[
      { id:"portal", title:"Adding Patients to the Patient Portal",
        lead:"Give a patient access to the InSync Patient Portal so they can view forms, messages and appointments.",
        steps:[
          {text:"Open the patient's chart and go to the <b>Demographics</b> tab.", },
          {text:"Confirm a valid <b>email address</b> is on file — the portal invite is sent there.", note:"No email on file = the invite can't be delivered. Add one first."},
          {text:"Click <b>Enable Portal Access</b> and choose the access level for this patient.",},
          {text:"Send the activation invite and confirm the patient receives the welcome email.",},
        ]},
      { id:"forms", title:"Sending & Managing Patient Forms",
        lead:"Send intake and assessment forms on-the-fly, on a schedule, or based on an action.",
        steps:[
          {text:"Open the <b>Patient Forms</b> module from the patient's chart.",},
          {text:"Review the list of available and previously sent forms.",},
          {text:"To send now, select the form and click <b>Send On-the-Fly</b>.",},
          {text:"To automate, attach the form to a <b>schedule</b> or to a <b>user-performed action</b>.", note:"Scheduled forms send automatically — double-check the timing before saving."},
        ]},
      { id:"insurance", title:"Insurance Management",
        lead:"Add, edit and inactivate insurance, attach it to patients, and handle authorizations.",
        steps:[
          {text:"Go to the <b>Insurance</b> section to add a new payer or edit an existing one.",},
          {text:"Attach the insurance to the patient and set <b>primary / secondary</b> order.",},
          {text:"Enter authorization details where required, including units and date range.",},
          {text:"To retire a plan, <b>inactivate</b> it rather than deleting so history is preserved.", note:"Deleting loses claim history — always inactivate instead."},
        ]},
      { id:"provider", title:"Adding a Provider",
        lead:"Create a provider record and set the right roles and permissions.",
        steps:[
          {text:"Open <b>Admin → Providers</b> and choose <b>Add Provider</b>.",},
          {text:"Fill in the provider's details, NPI and credentials.",},
          {text:"Assign <b>roles and permissions</b> appropriate to their position.",},
          {text:"Save and verify the provider appears in scheduling and billing.",},
        ]},
    ]
  },
  lauris: {
    name:"Lauris", icon:"🧪",
    blurb:"Lauris workflows and day-to-day tasks.",
    topics:[
      { id:"lauris-login", title:"Logging in & Navigation",
        lead:"Get oriented in Lauris and find the main work areas.",
        steps:[
          {text:"Open Lauris and sign in with your assigned credentials.",},
          {text:"Locate the main navigation and the modules you use most.",},
          {text:"Set up any defaults or favourites to speed up daily work.",},
        ]},
    ]
  },
  networking: {
    name:"Networking", icon:"🌐",
    blurb:"Connectivity, Wi-Fi, printers and shared drives.",
    topics:[
      { id:"net-printer", title:"Connecting a Network Printer",
        lead:"Add a shared network printer for a workstation.",
        steps:[
          {text:"Find the printer's <b>IP address</b> or network name.",},
          {text:"On the PC, open <b>Settings → Printers & scanners → Add device</b>.",},
          {text:"Add by IP/hostname, install the correct driver, and print a test page.", note:"Wrong driver = garbled prints. Match the exact model."},
        ]},
    ]
  },
  hardware: {
    name:"Hardware", icon:"🖥️",
    blurb:"Workstations, peripherals and physical setup.",
    topics:[
      { id:"hw-setup", title:"New Workstation Setup",
        lead:"Standard checklist for preparing a new workstation.",
        steps:[
          {text:"Unbox, connect monitor(s), keyboard, mouse and network cable.",},
          {text:"Power on, complete OS setup and join the domain/network.",},
          {text:"Install required software and verify access to all systems.",},
        ]},
    ]
  },
};

