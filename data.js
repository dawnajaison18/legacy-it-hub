/* ============================================================
   CONTENT — edit this object to add your own topics & steps.
   Each step can be plain text or {text, note}.
   Steps are written in plain language for non-technical users.
   ============================================================ */
const DATA = {
  onboarding: {
    name:"New Joinee Setup", icon:"📋",
    blurb:"Everything a new employee needs on day one — email, Teams, desk phone, and printer.",
    topics:[
      { id:"nj-email", title:"Outlook Email & MFA Setup",
        lead:"Help a new employee sign into their MPCI email for the first time and set up the extra security step (called MFA).",
        steps:[
          {text:"Open a web browser — that's the program you use to visit websites, like <b>Microsoft Edge</b> (a blue wave icon) or <b>Google Chrome</b> (a red, yellow, green and blue circle).",},
          {text:"Click in the long bar at the very top of the browser, type <b>outlook.com</b>, and press the <b>Enter</b> key on the keyboard.",},
          {text:"On the page that opens, click the <b>Sign In</b> button.",},
          {text:"Type the new employee's full <b>MPCI email address</b> (for example, name@mpcipbc.com), then click <b>Next</b>.",},
          {text:"Type the <b>password the IT Department gave them</b>, then click <b>Sign In</b>.", note:"Passwords care about capital and small letters, so type it exactly as it was given."},
          {text:"A screen titled <b>\"More information required\"</b> will appear — this is normal, it's just turning on extra security. Click <b>Next</b>.",},
          {text:"When asked how to receive the security code, click <b>\"I want to set up a different method\"</b>, choose <b>Phone</b> from the list, then click <b>Confirm</b>.", note:"This makes the code arrive as a text message, which is the easiest option for most people."},
          {text:"Type the employee's <b>cell phone number</b> in the box, make sure <b>\"Text me a code\"</b> is selected, then click <b>Next</b>.",},
          {text:"A text with a code will arrive on the phone in a few seconds. Type that code into the box on screen and click <b>Verify</b>.", note:"The code only works for about one minute. If nothing happens, ask for a new code and try again."},
          {text:"When the box asks <b>\"Stay signed in?\"</b>, click <b>Yes</b> on their own work computer so they don't log in every time. Click <b>No</b> on a shared computer.",},
          {text:"The inbox opens — the email is now set up and ready to use.",},
        ]},

      { id:"nj-teams", title:"Microsoft Teams — Getting Started",
        lead:"Show a new employee around Microsoft Teams, the app the company uses for messages, meetings, and announcements.",
        steps:[
          {text:"Open the <b>Microsoft Teams</b> app (a purple square with a white \"T\"). If it asks you to sign in, use the MPCI email and password.",},
          {text:"Look down the <b>left edge of the screen</b> — there's a column of icons. This is the main menu you'll use to move around.",},
          {text:"Click the <b>Chat</b> icon (a speech bubble) to send a private message to one person, much like a text.",},
          {text:"Click the <b>Teams</b> icon (two little people), then click <b>General</b> and the <b>Posts</b> tab — this is where company-wide announcements are posted for everyone.",},
          {text:"Click the <b>Calendar</b> icon to see scheduled meetings, and click a meeting to join it.",},
          {text:"While in the <b>General</b> channel, look along the top for a tab called <b>PTO Form</b> and click it to request time off.", note:"Time-off requests go through this form in Teams, not through email."},
          {text:"Next to it, click the <b>MPCI Extension List</b> tab to look up any coworker's phone extension, email, job title, and office location.",},
        ]},

      { id:"nj-phone", title:"Office Phone (Mitel Desk Phone) Guide",
        lead:"Teach a new employee the basics of using the office desk phone.",
        steps:[
          {text:"<b>If the phone rings, pick up the handset and answer it.</b>", note:"Everyone helps cover the phones — please always answer a ringing phone."},
          {text:"To call a number <b>outside the company</b>, first press the <b>8</b> button, then dial the phone number.",},
          {text:"To call a <b>coworker inside the building</b>, just dial their <b>extension</b> — the short number from the Extension List.",},
          {text:"The <b>Speaker</b> button lets you talk without holding the handset. The <b>Mute</b> button stops the other person from hearing you — press it again to turn it back on.",},
          {text:"Press <b>Hold</b> to pause a call without hanging up. Press <b>Transfer</b> to pass the call to someone else.",},
          {text:"If the small <b>light at the top of the phone</b> is glowing, you have a new voicemail. Press the <b>Voicemail Access</b> button (an envelope) and follow the spoken instructions.",},
          {text:"The buttons beside the screen are shortcuts. <b>Page 1</b> has Forward, Park/Retrieve, Transfer/Conference, and Page. <b>Page 2</b> has one-touch buttons that call whole departments — Admissions, Front Desk, Billing, HR, IT, and Records.", note:"The fastest way to reach IT is the MIS IT Dept button on Page 2."},
        ]},

      { id:"nj-printer", title:"Connecting a Printer (New Setup)",
        lead:"Set up a new employee's computer so it can print to the office printer.",
        steps:[
          {text:"First find the printer's <b>IP address</b> — that's a set of numbers like 192.168.1.50 that tells the computer where the printer is. It's usually on a sticker on the printer, or you can print an \"information\" page from the printer's own menu.",},
          {text:"On the computer, click the <b>Start button</b> (the Windows logo in the very bottom-left corner), then click <b>Settings</b> (the gear-shaped icon).",},
          {text:"Click <b>Bluetooth & devices</b>, then <b>Printers & scanners</b>, then the <b>Add device</b> button.",},
          {text:"Wait a few seconds. If the printer appears in the list, click <b>Add device</b> next to its name.",},
          {text:"If it doesn't appear, click <b>\"Add manually\"</b>, choose to add it by <b>IP address</b>, and type in the numbers from the first step.",},
          {text:"Once it installs, right-click the printer and choose <b>Print test page</b> to make sure it works.", note:"If the test page is blank or messy, the wrong printer model was chosen — remove it and add it again, picking the exact model."},
          {text:"To make it the one used automatically, right-click it and choose <b>Set as default printer</b>.",},
        ]},
    ]
  },

  insync: {
    name:"InSync EHR", icon:"🩺",
    blurb:"Qualifacts InSync workflows — portal, insurance, providers and more.",
    topics:[
      { id:"insync-addendum", title:"Adding an Addendum to a Signed Encounter",
        lead:"Add extra notes to an encounter that's already been signed and closed, without changing the original note.",
        steps:[
          {text:"In InSync, use the <b>search box</b> at the top to search for the patient by name.",},
          {text:"Click the patient's profile, then choose <b>Facesheet</b> from the menu that appears.",},
          {text:"In the <b>Encounter Details</b> section, find the encounter you want and click the red <b>Encounter Closed</b> icon.",},
          {text:"Click the <b>End Encounter</b> icon in the top-right corner of the screen.",},
          {text:"Click the <b>Addendum</b> tab along the top.",},
          {text:"Type your extra notes in the <b>Addendum</b> field, then click <b>Save</b>.",},
          {text:"A green message <b>\"Addendum saved successfully\"</b> appears at the top of the screen.",},
          {text:"Click the <b>Exit (X)</b> icon to close the encounter note page.",},
          {text:"Click on the encounter note again to view the saved addendum.",},
          {text:"The closed note now shows a green note at the end saying an addendum has been added.", note:"The original signed note is never changed — the addendum is added separately, so the record stays intact."},
          {text:"Below the provider's signature, an <b>Addendum Details</b> section shows who added each addendum, the date and time, and what was added.",},
        ]},

      { id:"insync-export-payors", title:"Exporting the List of Payors",
        lead:"Export the full insurance/payor list from InSync to an Excel file.",
        steps:[
          {text:"Click the <b>Admin</b> icon at the bottom-left of the screen. Or use the <b>Quick Search</b> bar (top-left) and type <b>Insurance in Administration</b>.",},
          {text:"This opens the <b>Insurance Management</b> screen.",},
          {text:"At the <b>top-right corner of the grid</b>, find and click the <b>Export icon</b> (it looks like a spreadsheet/grid icon).",},
          {text:"A pop-up titled <b>Export Insurance Details</b> appears. Tick any extra checkboxes you need, then click <b>Export Data</b>.", note:"Use the Financial Class, Insurance Type, or Insurance Name dropdowns first if you want to filter what's exported."},
          {text:"The list downloads as an Excel file (<b>Insurance List.xlsx</b>) — find it in your browser's recent downloads, ready to open in Excel.",},
        ]},

      { id:"insync-create-group", title:"Creating a Patient Group", group:"Patient Group", short:"Creating",
        lead:"Set up a new patient group in InSync, used for group therapy sessions.",
        steps:[
          {text:"From the <b>Quick Search</b> bar in the top-left corner of the Dashboard, type <b>GROUPS</b> and select <b>Patient Groups in Patients</b>.", img:"images/insync-creategroup-1.png"},
          {text:"On the Patient Groups screen, click <b>Create Patient Group</b> to open the creation form.", img:"images/insync-creategroup-2.png"},
          {text:"Complete all required fields in the form, then click <b>Save</b>.", img:"images/insync-creategroup-3.png", note:"Fields: (1) Group Name — a unique name for the group. (2) Effective Start Date — when the group becomes active. (3) Effective End Date — optional; leave blank if ongoing. (4) Select Provider — the provider for this group. (5) Add Patients — search by First Name, Last Name, MRN, or SSN; chosen patients appear in the Selected Patients panel on the right. (6) Save."},
        ]},

      { id:"insync-manage-groups", title:"Managing Patient Groups", group:"Patient Group", short:"Managing",
        lead:"Expand, edit, remove members from, or inactivate an existing patient group.",
        steps:[
          {text:"Use the icons next to each group to manage it: the <b>Plus (+)</b> expands and shows all members, the <b>purple Edit Pencil (✎)</b> edits the group or adds members, and the <b>red X (✕)</b> inactivates the group.", img:"images/insync-mg-icons.png"},
          {text:"<b>To remove a patient</b> — click the <b>Expand (+)</b> icon on the left of the group name to display all patients currently in the group.", img:"images/insync-mg-removeconfirm.png"},
          {text:"Click the <b>Inactivate Patient from Group</b> icon next to the patient you want to remove, then click <b>Yes</b> on the confirmation pop-up.", img:["images/insync-mg-removeconfirm.png","images/insync-mg-expand.png"]},
          {text:"A <b>\"Patient Removed Successfully\"</b> message appears at the top of the screen.", img:"images/insync-mg-removed.png"},
          {text:"<b>To edit the group or add members</b> — expand the group with <b>(+)</b>, click the <b>Edit Group (✎)</b> icon next to the group name, make your changes on the Patient Group details page, then click <b>Update</b>.", img:"images/insync-mg-editscreen.png"},
          {text:"A <b>\"Patient Group Updated Successfully\"</b> message appears at the top of the screen.", img:"images/insync-mg-editsuccess.png"},
          {text:"<b>To edit one patient's record</b> — expand the group, click the <b>Edit (✎)</b> icon on that patient's row to expand it, change the details, then click the <b>Tick (✔)</b> to save, or the <b>Cross (✖)</b> to discard.", img:["images/insync-mg-editpatient-1.png",{src:"images/insync-mg-editpatient-2.png",lg:true}]},
        ]},

      { id:"insync-schedule-group", title:"Scheduling a Group Appointment", group:"Patient Group", short:"Scheduling",
        lead:"Book a group therapy session on the Scheduler, and verify each patient's details first.",
        steps:[
          {text:"Open the <b>Scheduler</b> using the Scheduler icon, then select the date, day, and time for the group. A booking pop-up appears.", img:{src:"images/insync-sch-select.png",lg:true}},
          {text:"Complete the booking form: set the <b>Patient/Group</b> (the group name), the <b>Program</b>, the <b>Visit Status</b> (set to Pending), and the <b>Visit Type</b> (which group encounter type is being scheduled).", img:{src:"images/insync-sch-booking.png",lg:true}, note:"The POS Code auto-populates if it was mapped to the group when the group was created."},
          {text:"Before booking, expand the <b>Group Details</b> ribbon to see all the group's patients.", img:{src:"images/insync-sch-verify.png",lg:true}},
          {text:"Select each patient one by one and verify their <b>Primary Insurance</b>, <b>Secondary Insurance</b> (if any), <b>Primary Authorization</b>, and <b>Secondary Authorization</b>. Repeat for every patient in the group.", note:"Verifying insurance and authorization before booking avoids billing problems later."},
          {text:"Once all patients are verified, click <b>Book Appointment</b>. A success message appears, and the group shows as a light-blue ribbon on the Scheduler — the orange number shows how many patients are booked.", img:["images/insync-sch-booked-1.png","images/insync-sch-booked-2.png"]},
          {text:"<b>To add a patient later (on the fly)</b> — hover over the group encounter name on the Scheduler until a hyperlink appears, then click it to open the pop-up.", img:"images/insync-sch-booked-2.png"},
          {text:"Select the patient from the pop-up, set their <b>Visit Status</b>, then click <b>Book Appointment</b>. Repeat for each additional patient.", img:{src:"images/insync-sch-otf-booking.png",lg:true}},
          {text:"The patient count on the Scheduler increases by one (for example, from 2 to 3).", img:"images/insync-sch-otf-count.png"},
        ]},

      { id:"insync-group-note", title:"Documenting a Group Therapy Note", group:"Patient Group", short:"Group Therapy Notes",
        lead:"Complete a group therapy note in three phases — the shared group note, each patient's individual note, and the charting elements.",
        steps:[
          {text:"<b>Prerequisite:</b> make sure every patient has the <b>Group Program</b> added on the Patient Group screen before you start.",},
          {text:"From the <b>Scheduler</b>, click the group appointment to open the menu, then select <b>Check In & Start Encounter</b>. This opens the Group Therapy Notes page.", img:["images/insync-gn-start-1.png",{src:"images/insync-gn-start-2.png",lg:true}]},
          {text:"<b>Phase 1 — Group Note:</b> select the patients you want to include in the group note.", img:{src:"images/insync-gn-p1-select.png",lg:true}},
          {text:"Choose <b>Group</b> from the Template dropdown, then fill out the note completely — the <b>Subjective</b> field, the <b>Plan</b>, and tick all applicable <b>Therapeutic Interventions</b> checkboxes.", img:{src:"images/insync-gn-p1-fill.png",lg:true}},
          {text:"Click <b>Add to Patient Chart</b> — a success message appears. Then minimize the Group Note bar using the upward arrow (▲) to move on to Individual Notes.", img:["images/insync-gn-p1-success-1.png","images/insync-gn-p1-success-2.png"]},
          {text:"<b>Phase 2 — Individual Notes:</b> for each patient, either (A) click the arrow next to the Template dropdown on the Individual Notes bar, pick the patient, and choose <b>Group Note - Individual</b>; or (B) tick the patient's checkbox in <b>Group Members</b> so their name auto-fills, then choose <b>Group Note - Individual</b>.", img:[{src:"images/insync-gn-p2-template-1.png",lg:true},{src:"images/insync-gn-p2-template-2.png",lg:true}]},
          {text:"Fill out the individual note completely and click <b>Save</b>. A <b>\"Data Saved Successfully\"</b> message appears. Repeat for every patient in the group.", img:[{src:"images/insync-gn-p2-fill-1.png",lg:true},"images/insync-gn-p2-fill-2.png"]},
          {text:"<b>Phase 3 — Charting Elements:</b> click the <b>Charting Elements</b> icon on the Group Member section, then complete all required tabs for each member.", img:{src:"images/insync-gn-p3-open.png",lg:true}},
          {text:"Fill out all the details across <b>Individual Notes, Group Notes, Diagnosis, CFARS/FARS, and Visit Codes</b>, then click <b>Save</b>.", img:{src:"images/insync-gn-p3-fill.png",lg:true}},
          {text:"Click the <b>Go to Group Therapy</b> icon to return to the group encounter, and repeat for each patient. Once all patients are done, click <b>END ENCOUNTER</b>.", img:[{src:"images/insync-gn-p3-close-1.png",lg:true},"images/insync-gn-p3-close-2.png"], note:"If a required element is missed, InSync shows a restriction alert. A patient's name turns orange once their encounter is closed."},
          {text:"Complete the required details in the <b>End Encounter</b> pop-up and click <b>Sign</b>.", img:{src:"images/insync-gn-end.png",lg:true}},
        ]},

      { id:"insync-ins-add", title:"Adding New Insurance", group:"Insurance Management", short:"Adding New Insurance",
        lead:"Create a new insurance record in InSync.",
        steps:[
          {text:"In the <b>Quick Search</b> bar, type <b>insurance</b> and select <b>Insurance in Administration</b> — or go to <b>Admin → Insurance Management</b>.", img:{src:"images/ins-add-1.png",lg:true}},
          {text:"You'll see the current list of insurance on file. Click <b>Add New Insurance</b> in the bottom-left corner.", img:{src:"images/ins-add-2.png",lg:true}},
          {text:"Fill out all mandatory fields — <b>Name, Address, Insurance Type, Filing State, and Claim Payer ID</b> — then click <b>Add</b>.", img:{src:"images/ins-add-3.png",lg:true}, note:"Every field marked with an asterisk (*) is required before you can click Add."},
          {text:"A <b>\"Filing Vendor configured successfully\"</b> message confirms it saved.", img:"images/ins-add-4.png"},
          {text:"To change filing-vendor details later, click the <b>edit icon</b> to the left of the record, update the fields, and click <b>Update</b>.", img:{src:"images/ins-add-5.png",lg:true}},
          {text:"Scroll down to <b>Eligibility Details</b> and <b>Insurance Rules</b>. Copy the Claim Payer ID into the <b>Eligibility Payer ID</b>. For Insurance Rules, click <b>Yes</b> to copy from an existing insurance or <b>No</b> to create new ones, then click <b>Save</b>.", img:{src:"images/ins-add-6.png",lg:true}, note:"The Eligibility Payer ID and Claim Payer ID are usually the same value."},
          {text:"A <b>\"New Insurance added successfully\"</b> message confirms the insurance is created.", img:"images/ins-add-7.png"},
        ]},

      { id:"insync-ins-edit", title:"Editing Existing Insurance", group:"Insurance Management", short:"Editing Insurance",
        lead:"Update an insurance record that already exists.",
        steps:[
          {text:"Go to <b>Admin → Insurance Management</b>, click the <b>edit pencil icon</b> to the left of the insurance name, scroll to the section you need, update the fields, and click <b>Save</b>.", img:{src:"images/ins-edit-1.png",lg:true}},
        ]},

      { id:"insync-ins-inactivate", title:"Inactivating & Reactivating Insurance", group:"Insurance Management", short:"Inactivate / Reactivate",
        lead:"Take an insurance out of use, and bring it back when needed.",
        steps:[
          {text:"Go to <b>Admin → Resource Management</b>, search for the insurance name, and click the <b>inactivate icon</b> next to it.", img:{src:"images/ins-inact-1.png",lg:true}},
          {text:"Click <b>Yes</b> on the confirmation pop-up.", img:"images/ins-inact-2.png", note:"Double-check you're inactivating the correct insurance."},
          {text:"An <b>\"Insurance inactivated successfully\"</b> message confirms it.", img:"images/ins-inact-3.png"},
          {text:"<b>To reactivate</b> — deselect the active checkbox to show inactive records, then click the <b>Active</b> button next to the insurance.", img:{src:"images/ins-inact-4.png",lg:true}},
          {text:"Click <b>Yes</b> to confirm — a success message confirms the insurance is active again.", img:"images/ins-inact-5.png"},
        ]},

      { id:"insync-ins-patient", title:"Adding Insurance to a Patient", group:"Insurance Management", short:"Adding to a Patient",
        lead:"Attach an insurance to a specific patient's record.",
        steps:[
          {text:"Click the <b>Patient Search</b> bookmark and search for the patient by name.", img:{src:"images/ins-pat-1.png",lg:true}},
          {text:"Click the icon under the <b>Payor</b> column to jump to the insurance section of the patient's demographics — or click <b>Edit</b> and open the Insurance tab.", img:{src:"images/ins-pat-2.png",lg:true}},
          {text:"Fill in all required insurance details. In the <b>Subscriber Details</b> ribbon, use <b>Copy Patient Details</b> (or <b>Copy Guarantor Details</b>) to auto-fill from demographics, then click <b>Save</b>.", img:{src:"images/ins-pat-3.png",lg:true}},
          {text:"If the patient is enrolled in programs, a pop-up asks whether to map the insurance to them — click <b>Yes</b> for accurate billing, or <b>No</b> to skip.", img:"images/ins-pat-4.png"},
          {text:"A second pop-up asks whether to link the insurance to <b>Current and Future</b> or <b>Past</b> appointments. Choose the option you need and click <b>Yes</b>.", img:"images/ins-pat-5.png"},
        ]},

      { id:"insync-ins-auth", title:"Insurance Authorization", group:"Insurance Management", short:"Authorization",
        lead:"Set up and view authorizations on a patient's insurance.",
        steps:[
          {text:"In the patient's <b>Insurance tab</b>, click the <b>gear icon</b> to the right of the insurance record to open Authorization Details.", img:{src:"images/ins-auth-1.png",lg:true}, note:"At least one starred field — Authorization Number or Authorization Name — must be filled."},
          {text:"Fill out the authorization details. If the <b>Type</b> is <b>Per Unit</b>, also complete the <b>CPT Configuration</b> — enter the CPT code and allowed units, click <b>Add</b>, then <b>Save</b>.", img:{src:"images/ins-auth-2.png",lg:true}},
          {text:"The <b>CPT Configuration</b> section shows each CPT code with its configured and remaining units; use the action icons to edit or inactivate entries.", img:{src:"images/ins-auth-3.png",lg:true}},
          {text:"An <b>\"Authorization mapped successfully\"</b> message confirms it's linked to the patient's insurance.", img:"images/ins-auth-4.png"},
          {text:"The <b>gear icon</b> now appears highlighted. Click the <b>i icon</b> to see a quick summary of the authorization.", img:{src:"images/ins-auth-5.png",lg:true}},
        ]},

      { id:"insync-enc-start", title:"Starting an Encounter", group:"Encounter & Assessment", short:"Starting an Encounter",
        lead:"Launch a clinical encounter for a checked-in patient.",
        steps:[
          {text:"On the <b>Visit Overview</b> screen, find the patient whose Visit Status is <b>Check In</b>, then click the <b>Encounter icon</b> on the right of their row.", img:{src:"images/enc-start-1.png",lg:true}},
          {text:"The <b>Facesheet</b> opens — the central hub for the encounter. Use the tab bar at the top (Diagnosis, S.N.A.P., Treatment Plan, Visit Codes, etc.) to move between charting sections.", img:{src:"images/enc-start-2.png",lg:true}},
        ]},

      { id:"insync-enc-copy", title:"Copy from a Previous Encounter", group:"Encounter & Assessment", short:"Copy from Previous",
        lead:"Reuse charting from a prior encounter to save time, then end and sign the encounter.",
        steps:[
          {text:"Inside the encounter, click the <b>Copy icon</b> in the top-right toolbar of the Facesheet. Use the Type, Provider, Category, and Program filters to find the right encounter.", img:{src:"images/enc-copy-1.png",lg:true}},
          {text:"Click <b>Select</b> on the encounter you want to copy from — the row highlights yellow and its charting elements load below.", img:{src:"images/enc-copy-2.png",lg:true}},
          {text:"Tick the checkboxes next to the items you want to copy, then click <b>Copy & Append</b>.", img:{src:"images/enc-copy-3.png",lg:true}, note:"\"Copy & Append\" adds to the current encounter; \"Copy & Replace\" overwrites existing elements — use it carefully."},
          {text:"A green banner confirms the elements were appended. Review the copied documents and edit anything specific to this visit.", img:{src:"images/enc-copy-4.png",lg:true}},
          {text:"When you're done, click the orange <b>Exit Encounter</b> button (top-right) to open the End Encounter page.", img:{src:"images/enc-copy-5.png",lg:true}},
          {text:"On the <b>End Encounter</b> page, review Patient Details, Visit Codes, and Appointment Details.", img:{src:"images/enc-copy-6.png",lg:true}},
          {text:"In the <b>Note Control Panel</b> at the bottom, enter the <b>End Time</b>, click <b>End</b>, then <b>Sign</b>. An \"Encounter ended successfully\" banner appears.", img:[{src:"images/enc-copy-7a.png",lg:true},"images/enc-copy-7b.png"]},
        ]},

      { id:"insync-enc-macros", title:"Adding & Using Macros", group:"Encounter & Assessment", short:"Macros",
        lead:"Macros are reusable note templates — create one once and insert it into any encounter.",
        steps:[
          {text:"A macro is a reusable note template. Inside the encounter, expand the <b>General Notes</b> box, scroll to the far right of its toolbar, and click the green <b>+ Add Macro</b> icon.", img:{src:"images/enc-macro-1.png",lg:true}},
          {text:"The <b>Macro Details</b> box opens. To create a new macro, click the <b>gear (⚙) icon</b>.", img:{src:"images/enc-macro-2.png",lg:true}},
          {text:"In <b>Macro Configuration</b>, enter a <b>Macro Name</b>, type the reusable text, and click <b>Save</b>.", img:{src:"images/enc-macro-3.png",lg:true}},
          {text:"Back in General Notes, click <b>+ Add Macro</b> again, pick your macro from the <b>Macro Name</b> dropdown, then click <b>Insert</b>. Edit the inserted text for the specific patient.", img:[{src:"images/enc-macro-4a.png",lg:true},"images/enc-macro-4b.png"]},
        ]},

      { id:"insync-enc-treatment", title:"Adding a Treatment Plan", group:"Encounter & Assessment", short:"Treatment Plan",
        lead:"Document client problems, goals, objectives, and interventions, then print and send the Treatment Plan Letter.",
        steps:[
          {text:"In the encounter tab bar, click the <b>Treatment Plan</b> tab (it highlights teal/green).", img:{src:"images/enc-tp-1.png",lg:true}},
          {text:"The page has <b>General Notes</b> at the top, a <b>problem entry form</b> in the middle, and a <b>problem grid</b> at the bottom.", img:{src:"images/enc-tp-2.png",lg:true}},
          {text:"Fill in the problem details — <b>Behaviorally Descriptive & in Client's Words</b>, <b>Provider Category</b>, <b>Send To Do</b> — then click <b>Add</b>.", img:{src:"images/enc-tp-3.png",lg:true}},
          {text:"A <b>\"Problem added successfully\"</b> banner appears and the problem shows as a row in the grid. Repeat to add all problems.", img:{src:"images/enc-tp-4.png",lg:true}},
          {text:"For each problem row, fill in the <b>Goal(s)</b>, <b>Objectives</b>, and <b>Therapeutic Intervention/Modality</b>, then click <b>Add</b> on the row.", img:{src:"images/enc-tp-5.png",lg:true}},
          {text:"Expand a problem to complete the goal details — <b>Goal (\"I will…\")</b>, <b>Objectives</b>, <b>Intervention/Modality</b>, and the <b>SDOH</b> fields — then click <b>Add</b>.", img:{src:"images/enc-tp-6.png",lg:true}},
          {text:"When all goals are saved, click the <b>Print Treatment Plan Letter</b> icon in the top-right toolbar to open the formatted letter.", img:[{src:"images/enc-tp-7a.png",lg:true},{src:"images/enc-tp-7b.png",lg:true}]},
          {text:"In the letter's <b>Patient Signature</b> section, enter Notes, Signed By, and Relationship, capture the signature, then click <b>Sent Treatment Plan Letter to Portal</b>.", img:{src:"images/enc-tp-8.png",lg:true}},
          {text:"The signed letter is sent, and a <b>\"Care Plan Letter saved to Document Manager successfully\"</b> message confirms it auto-saved.", img:[{src:"images/enc-tp-9a.png",lg:true},"images/enc-tp-9b.png"]},
        ]},

      { id:"insync-enc-assess", title:"Sending Assessments to the Portal", group:"Encounter & Assessment", short:"Sending Assessments",
        lead:"Configure clinical assessments and send them to patients — on-the-fly, on a schedule, or triggered by an action.",
        steps:[
          {text:"In the <b>Quick Search</b> bar, type <b>ass</b> and select <b>Assessment Tools in Patients</b> (not \"in Administration\").", img:[{src:"images/enc-assess-1a.png",lg:true},{src:"images/enc-assess-1b.png",lg:true}]},
          {text:"Click <b>Configure Charting Assessment Tools</b>, tick the <b>Portal</b> checkbox for each assessment you want to enable, then click <b>Save</b>.", img:{src:"images/enc-assess-2.png",lg:true}, note:"Check with your manager before enabling — many assessment tools are copyright-protected."},
          {text:"<b>To send now</b> — expand the <b>Send Assessments on-the-fly</b> ribbon, fill in the patient, provider, program, and recipient details, then click <b>Save</b>.", img:[{src:"images/enc-assess-3a.png",lg:true},{src:"images/enc-assess-3b.png",lg:true}]},
          {text:"<b>To send on a schedule</b> — expand the schedule ribbon, set the schedule, dates, patient, provider, and program, then click <b>Save</b>. Great for recurring screenings like PHQ-9 or GAD-7.", img:{src:"images/enc-assess-4.png",lg:true}},
          {text:"<b>To send on an action</b> — expand the <b>Send Assessments based on a user performed action</b> ribbon, set the triggering <b>Action</b> and effective start date, fill in the patient/provider/program, then click <b>Save</b>.", img:{src:"images/enc-assess-5.png",lg:true}},
        ]},

      { id:"insync-merge-patients", title:"Merging Duplicate Patient Records",
        lead:"Combine two duplicate patient records into one. Important: a merge is permanent and cannot be undone.",
        steps:[
          {text:"In the <b>Quick Search</b> bar (top-left), type <b>Merge Patients</b> and select it from the dropdown.", img:{src:"images/merge-1.png",lg:true}},
          {text:"Assign the two records: the <b>Source</b> patient (merges into the Target and becomes <b>inactive</b>) and the <b>Target</b> patient (the record that is kept).", img:{src:"images/merge-2.png",lg:true}, note:"Medications, Allergies, Pharmacies, Family Members, Claims, and Payments are NOT merged. The Source record becomes inactive — verify both carefully."},
          {text:"Carefully compare all patient details in both records and select the correct information to keep in the merged profile.",},
          {text:"Review the list of data elements to copy. Click <b>Select All</b> to check everything, or tick the specific fields you want merged.", img:{src:"images/merge-3.png",lg:true}},
          {text:"Scroll to the bottom of the page and click the <b>Merge</b> button.", img:{src:"images/merge-4.png",lg:true}},
          {text:"A warning pop-up appears explaining the action can't be reversed. Click <b>Merge</b> on the pop-up to confirm.", img:{src:"images/merge-5.png",lg:true}, note:"This is irreversible — double-check all selections before confirming."},
          {text:"A green <b>\"Patient details merged successfully\"</b> banner appears. The Source record is now inactive and its data is in the Target record.", img:{src:"images/merge-6.png",lg:true}, note:"Document the merge in the case notes for the audit trail."},
        ]},

      { id:"insync-pr-add", title:"Adding a Provider", group:"Provider & Roles", short:"Adding a Provider",
        lead:"Create a new provider record in InSync, from Admin → Resource Management through to saving the login.",
        steps:[
          {text:"Click the <b>Admin</b> bookmark and open the <b>Resource Management</b> tab. Make sure the <b>Resource Type</b> dropdown is set to <b>Provider</b> before entering anything.", img:["images/pr-addprov-1a.png","images/pr-addprov-1b.png","images/pr-addprov-1c.png"]},
          {text:"In <b>Personal Details</b>, enter the provider's First Name, Last Name, and Suffix, the Date of Birth, and set <b>InSync License</b> to Yes or No as applicable.", img:"images/pr-addprov-2.png"},
          {text:"The full form shows the <b>Identification Numbers</b>, <b>Specialties/Facilities</b>, and <b>Login/Digital Signature</b> sections that must be completed before saving.", img:"images/pr-addprov-3.png", note:"Assign at least one Facility and click the ★ star to set the Preferred Login Facility before saving."},
          {text:"In <b>Contact Details</b>, enter the address/phone/email (or check <b>Keep it same as Practice Business Address</b>). In <b>Identification Numbers</b>, enter the <b>NPI Code</b> and <b>Employment Type</b> (both required). In <b>Specialties/Facilities</b>, check the facilities and set the ★ Preferred Login Facility. In <b>Login/Digital Signature</b>, set a Username, assign a Role, create a 4-digit EPIN, and add a Signature. Then click <b>Save</b>.", img:"images/pr-addprov-4.png", note:"Best practice: Username = first initial + last name (e.g., JSmith)."},
        ]},

      { id:"insync-pr-sig", title:"Digital Signature Setup", group:"Provider & Roles", short:"Digital Signature",
        lead:"Capture a provider's digital signature, used to sign encounter notes.",
        steps:[
          {text:"In the top-left <b>Smart Search</b> box, type <b>Resource</b> and select <b>Resource in Administration</b>.", img:"images/pr-sig-1.png"},
          {text:"On the Resource Management page, search the provider in the <b>Resource Name</b> field and click the <b>Edit icon</b> next to their name — their saved info loads into all fields.", img:"images/pr-sig-2.png"},
          {text:"Scroll to the <b>Login / Digital Signature</b> section and click the <b>Capture Signature</b> button (pen icon) next to the E-Signature field.", img:"images/pr-sig-3.png", note:"Only ONE signature is allowed per user — once saved, admin access is needed to change it."},
          {text:"<b>Manual tab</b> — draw the signature with a mouse or stylus, then click <b>Accept</b>.", img:"images/pr-sig-4.png"},
          {text:"<b>Manual tab (upload)</b> — click <b>Browse</b>, select a saved <b>.jpg</b> signature file, click Open, then <b>Accept</b>.", img:"images/pr-sig-5.png", note:"Only .jpg files are accepted."},
          {text:"<b>Type tab</b> — type the provider's legal name, pick a font style, preview it, then click <b>Accept</b>.", img:"images/pr-sig-6.png"},
          {text:"<b>Initials tab</b> — initials are auto-generated; use <b>Change Style</b> to pick a font, then <b>Accept</b>. Always click <b>Save</b> on the main provider page afterwards.", img:"images/pr-sig-7.png"},
        ]},

      { id:"insync-pr-epin", title:"EPIN Setup", group:"Provider & Roles", short:"EPIN Setup",
        lead:"The EPIN is a four-digit code providers use to close and submit encounter notes.",
        steps:[
          {text:"Type <b>Resource</b> in Smart Search and select <b>Resource in Administration</b>, click the <b>Edit icon</b> for the provider, scroll to the <b>Login / Digital Signature</b> section, enter the four-digit <b>EPIN</b>, and click <b>Save</b>.", img:"images/pr-epin-1.png", note:"The default EPIN for all users is 1111 — update each provider right after setup if unique EPINs are required."},
        ]},

      { id:"insync-pr-edit", title:"Editing a Provider", group:"Provider & Roles", short:"Editing a Provider",
        lead:"Configure credentials, license, co-signature, and service-provider billing on an existing provider.",
        steps:[
          {text:"In <b>Credential Details</b>, pick a <b>Credential Type</b> (e.g., APRN, MSW, RN, MD/DO). To create a new one, click the <b>Configure Credential Type</b> icon. Set an <b>Alert Before</b> reminder for credential expiry.", img:"images/pr-edit-1.png"},
          {text:"In the <b>Configure Credential Type</b> window, complete the required fields and click <b>Add</b> — the new type appears in the dropdown immediately.", img:"images/pr-edit-2.png"},
          {text:"Configure the <b>License Type</b>, <b>Co-Signature</b> rules, and <b>Service Provider</b> settings as needed, then click <b>Save</b>.", img:"images/pr-edit-3.png", note:"Changes aren't retained until you click Save."},
          {text:"<b>Co-Signature</b> defines which encounter types need a co-signer. Use the <b>+</b> icon to add rules, or Edit/Delete to change them.", img:"images/pr-edit-4.png"},
          {text:"<b>Service Provider</b> — check the box, define the <b>Payer</b>, <b>Default Provider</b>, and <b>Encounter Type</b>, click <b>Add</b> (multiple allowed), then <b>Save</b>.", img:"images/pr-edit-5.png"},
        ]},

      { id:"insync-pr-lock", title:"Locking a Provider", group:"Provider & Roles", short:"Locking a Provider",
        lead:"Lock a provider's account to block them from logging in. Reversible by an authorized administrator.",
        steps:[
          {text:"In <b>Resource Management</b>, find the provider and click the <b>Click to lock the account</b> icon. A confirmation dialog appears.", img:"images/pr-lock-1.png", note:"The provider can't log in until an authorized user unlocks the account."},
          {text:"Select a <b>Lock Reason</b> (required; use the gear icon to add a new reason), add a <b>Lock Comment</b>, choose <b>To Do Recipient(s)</b> to notify, then click <b>Lock</b>.", img:"images/pr-lock-2.png"},
        ]},

      { id:"insync-pr-roles", title:"Roles & Permissions", group:"Provider & Roles", short:"Roles & Permissions",
        lead:"Assign Add / Edit / View / Delete permissions to a role, per module.",
        steps:[
          {text:"Click the <b>Select Role</b> dropdown and choose the role to configure. Click <b>View Users</b> to see everyone assigned to that role.", img:["images/pr-roles-1a.png","images/pr-roles-1b.png"]},
          {text:"Select a <b>module</b> from the left panel (Setup, Security, Billing, etc.). For each function, tick the permissions the role gets — <b>Add, Edit, View, Delete</b> — or use <b>Give full access</b> / <b>Remove all access</b>, then click <b>Save</b>.", note:"Permissions save per module — click Save after each module, not once for the whole role."},
          {text:"The permissions grid shows every function in the module with checkboxes for Add, Edit, Delete, View, and Personalize. Use the top-right Search to find a function across modules.", img:"images/pr-roles-2.png"},
        ]},

      { id:"insync-pr-allmod", title:"All Modules View", group:"Provider & Roles", short:"All Modules View",
        lead:"See and manage every module's permissions on one page, and audit changes.",
        steps:[
          {text:"Check the <b>Modules</b> checkbox on the left to show all modules and functions together. Use the top-right <b>Search</b> to find any function, and the <b>History</b> icon to view changes.",},
          {text:"With the Modules checkbox on, all modules and their functions appear in one scrollable view.", img:"images/pr-allmod-1.png"},
          {text:"The <b>History</b> panel records every permission change with the user's name and a timestamp — useful for auditing.", img:"images/pr-allmod-2.png"},
        ]},

      { id:"insync-pr-copy", title:"Copy Permissions", group:"Provider & Roles", short:"Copy Permissions",
        lead:"Create a new role quickly by copying permissions from an existing one.",
        steps:[
          {text:"Click the <b>Configure Role</b> icon on the Select Role dropdown. Enter the new <b>Role</b> name and description, use <b>Copy From</b> to pick an existing role, then click <b>Save</b>.", img:["images/pr-copy-1a.png","images/pr-copy-1b.png"]},
          {text:"Select the new role, go through each module to add or remove permissions, and click <b>Save</b> after each module. Assign users by editing their record and updating the Role field.", note:"Always review each module after copying to confirm the new role has exactly the access required."},
        ]},

      { id:"insync-npp-cosig", title:"Co-Signature Configuration", group:"New Provider Permissions (IT)", short:"Co-Signature",
        lead:"Part of the new-hire setup run every time a provider is hired — link the new provider to their supervisor's encounter types.",
        steps:[
          {text:"Use <b>Quick Search</b> to open <b>Co-Signature in Administration</b> and expand the search ribbon.", img:"images/npp-cosig-1.png"},
          {text:"In the <b>Co-Sign Req To</b> field, search the supervisor's name. Their encounter types populate below — select the one for the new provider and click the <b>Edit icon</b>.", img:"images/npp-cosig-2.png"},
          {text:"Under <b>Co-Signature</b> at the top, check the box next to the newly hired provider's name and click <b>Save</b>.", img:"images/npp-cosig-3.png"},
        ]},

      { id:"insync-npp-svc", title:"Service Provider Configuration", group:"New Provider Permissions (IT)", short:"Service Provider",
        lead:"New-hire setup: configure billing submission under the co-sign recipient.",
        steps:[
          {text:"Go to <b>Admin → Resource Management</b>, search for the new provider, click the <b>Edit icon</b>, and scroll to the <b>Service Provider</b> section.", img:"images/npp-svc-1.png"},
          {text:"Check the <b>Service Provider</b> box, pick the <b>Default Provider</b> (the co-sign recipient) under whom billing is submitted, click <b>Add</b>, then <b>Save</b>.", img:"images/npp-svc-2.png"},
          {text:"The Front Desk Coordinator should have all service providers with the <b>Vitals</b> encounter type added to their profile.", img:"images/npp-svc-3.png"},
        ]},

      { id:"insync-npp-sched", title:"Scheduler Setup", group:"New Provider Permissions (IT)", short:"Scheduler Setup",
        lead:"New-hire setup: create the provider's scheduler by copying an existing profile.",
        steps:[
          {text:"Use <b>Quick Search</b> to open <b>Scheduler Setup</b>, click <b>Create New Scheduler Profile</b>, type a <b>Profile Name</b> (based on the provider's role), and click the <b>Copy icon</b>.", img:["images/npp-sched-1a.png","images/npp-sched-1b.png","images/npp-sched-1c.png"]},
          {text:"Set the <b>Source</b> (usually the most recently hired provider) and the <b>Destination</b> (the new provider), check <b>Copy Available Time Slots</b>, then click <b>Copy</b>.", img:"images/npp-sched-2.png"},
          {text:"Click the <b>Expand</b> icon on the new scheduler, click <b>Edit</b>, set the slot <b>duration to 1 minute</b>, and click <b>Save Scheduler</b>.", img:"images/npp-sched-3.png"},
        ]},

      { id:"insync-npp-rights", title:"Manage Rights", group:"New Provider Permissions (IT)", short:"Manage Rights",
        lead:"New-hire setup: copy and assign scheduler access rights for the new provider.",
        steps:[
          {text:"In Scheduler Setup, click <b>Manage Rights</b>. On the <b>Resources</b> tab, click the <b>Copy icon</b> to copy scheduler permission from one resource to another.", img:["images/npp-rights-1a.png","images/npp-rights-1b.png"]},
          {text:"In the <b>Copy Scheduler Permission</b> dialog: <b>Copy From</b> = most recently hired provider, <b>Copy To</b> = new provider, check <b>Copy Rights Who Can Access Source</b>, click <b>Copy</b>, then <b>Save</b>.", img:"images/npp-rights-2.png"},
          {text:"On the <b>Schedulers</b> tab, select the new provider, remove the inherited Edit/Delete permissions, grant the new Edit/Delete permissions, and click <b>Save</b>.", img:"images/npp-rights-3.png"},
        ]},

      { id:"insync-npp-practice", title:"Practice Configuration", group:"New Provider Permissions (IT)", short:"Practice Configuration",
        lead:"New-hire setup: timely alerts, dashboard provider selection, encounter permissions, and eRx.",
        steps:[
          {text:"Use <b>Quick Search</b> to open <b>Practice in Administration</b> and click <b>Practice Configuration</b> in the bottom-right.", img:["images/npp-practice-1a.png","images/npp-practice-1b.png"]},
          {text:"Search <b>Set Timely Alert to Complete Encounter Note</b>, click the <b>Edit icon</b> on the encounter type, select the new provider from the <b>Provider</b> dropdown, click <b>Update</b>, then <b>Save</b>.", img:"images/npp-practice-2.png"},
          {text:"Search <b>Disable Provider Selection in Dashboard – Co-Sign List & Encounter List</b>, select the new provider from the <b>Disable for Provider</b> dropdown, and click <b>Save</b>.", img:"images/npp-practice-3.png"},
          {text:"Search <b>Allow Changing Ended Encounter to In Progress Encounter</b> and adjust as needed, then click <b>Save</b>.", img:"images/npp-practice-4.png", note:"This setting applies to the supervisor, not the new provider."},
          {text:"<b>e-Prescription (eRx)</b> — open e-Prescription in the Practice Level Configuration, expand <b>Configure eRx Roles</b>, assign the required roles/permissions, and click <b>Save</b>.", img:"images/npp-practice-5.png", note:"Applies to Doctors, Nurses, Restricted Nurses, Mid-Level Prescribers, and Med Assistants."},
        ]},

      { id:"insync-npp-docmgr", title:"Document Manager Permissions", group:"New Provider Permissions (IT)", short:"Document Manager",
        lead:"New-hire setup: copy document access privileges from the most recently hired provider.",
        steps:[
          {text:"Open <b>Document Manager</b>, click <b>Assign Permission</b>, then at the bottom click <b>Copy Privileges</b>.", img:["images/npp-docmgr-1a.png","images/npp-docmgr-1b.png"]},
          {text:"Set <b>Privileges From</b> = most recently hired provider and <b>Privileges To</b> = new provider, click <b>Apply</b>, then <b>Save</b>. A success message confirms it.", img:"images/npp-docmgr-2.png"},
        ]},

      { id:"insync-ppf-add", title:"Adding Patients to the Portal", group:"Patient Portal & Forms", short:"Adding to the Portal",
        lead:"Give a patient access to the online Patient Portal and send their intake forms.",
        steps:[
          {text:"Click the <b>Patient Search</b> bookmark and search by First Name, Last Name, DOB, MRN, or SSN.", img:"images/ppf-add-1.png"},
          {text:"Click the purple <b>Edit icon</b> on the left of the patient's row to open their full profile.", img:"images/ppf-add-2.png"},
          {text:"Scroll to <b>Patient Delegates and Portal Access</b> and check <b>Enable Portal Login for Patient</b> — the Username auto-fills with the patient's email.", img:"images/ppf-add-3.png", note:"Email, Mobile Number, and Primary Provider are required before enabling the portal."},
          {text:"To send forms now, check the <b>Patient Forms</b> checkbox and pick the forms to send from the dropdown.", img:"images/ppf-add-4.png"},
          {text:"In <b>Contact Details</b>, confirm the <b>Email</b> (used as the username) and <b>Mobile Number</b> (used for the OTP) are filled, with the correct Country.", img:"images/ppf-add-5.png", note:"A missing Email or Mobile Number will prevent OTP delivery."},
          {text:"(Optional) To give a family member or representative access, use <b>Additional Portal Login</b> — choose the Delegate Type, fill in their details, and click <b>Add</b>.", img:"images/ppf-add-6.png", note:"The patient must be saved before you can add delegates."},
          {text:"Scroll to the bottom and click <b>Save</b> — the system validates the required fields and generates a temporary password.", img:"images/ppf-add-7.png"},
          {text:"A confirmation appears with the patient's <b>Username</b> and <b>Temporary Password</b>, and the patient receives an email with the portal link.", img:"images/ppf-add-8.png", note:"The activation link expires in 72 hours; if it expires, the practice can re-send a new one."},
        ]},

      { id:"insync-ppf-access", title:"Accessing Patient Forms", group:"Patient Portal & Forms", short:"Accessing Forms",
        lead:"Open the Patient Forms module and preview the available forms.",
        steps:[
          {text:"In <b>Quick Search</b>, type <b>patient forms</b> and select <b>Patient Forms in Patients</b>. You can also add it as a bookmark via Configure User Profile → Bookmarks → General.", img:["images/ppf-access-1.png","images/ppf-access-1b.png"]},
          {text:"The module has two sections: <b>Manage Forms</b> (search/view sent forms) and <b>Schedule / Send New Patient Form</b>. Expand the latter to reveal the New Patient Form and Search bars.", img:"images/ppf-access-2.png"},
          {text:"Click the grey <b>New Patient Form</b> bar to list all configured forms, grouped by category. Click a form title to preview it before sending.", img:"images/ppf-access-3.png"},
        ]},

      { id:"insync-ppf-onfly", title:"Sending Forms On-the-Fly", group:"Patient Portal & Forms", short:"Send On-the-Fly",
        lead:"Send forms to specific patients (or all portal patients) right now.",
        steps:[
          {text:"Check the form(s) to send, then type the patient's name in the <b>Patient</b> field and select them from the dropdown.", img:"images/ppf-onfly-1.png", note:"Only patients with an active portal appear here. If a patient is missing, enable their portal access first."},
          {text:"In <b>To Do Recipient</b>, select the staff member or group to be notified when the form is completed, tick <b>Include Primary Provider</b> if needed, and click <b>Add</b>.", img:"images/ppf-onfly-2.png"},
          {text:"Review the Selected Patients and recipient, make sure <b>Send Email</b> is checked, then click <b>Save</b> — forms go to the patients' portals immediately.", img:"images/ppf-onfly-3.png"},
          {text:"<b>To send to all portal patients</b> — check the form, tick <b>Send to all Existing Patients</b> (patient fields grey out), set the To Do Recipient, and click <b>Save</b>.", img:"images/ppf-onfly-4.png", note:"Use this only when a form must go to your entire active portal population."},
        ]},

      { id:"insync-ppf-sched", title:"Scheduled & Action-Triggered Forms", group:"Patient Portal & Forms", short:"Scheduled & Action Forms",
        lead:"Automate form delivery on a recurring schedule or when a system action happens.",
        steps:[
          {text:"<b>On a schedule</b> — open <b>Send Forms based on a pre-configured schedule</b>, set the frequency (Daily/Weekly/Monthly/Yearly) and recurrence, the Start Date, the patient, the To Do Recipient, then click <b>Save</b>.", img:"images/ppf-sched-1.png", note:"Set Auto Expire if Not Submitted to expire forms the patient hasn't completed within a set number of days."},
          {text:"Use the grey <b>Search</b> bar to find saved schedules by patient, provider, or date. Edit or inactivate any schedule from the results.", img:"images/ppf-sched-2.png"},
          {text:"Click the <b>(i) icon</b> on a schedule row to expand its details — Patient, Action, Effective Start Date, End Date, and other settings.", img:"images/ppf-sched-3.png"},
          {text:"<b>On an action</b> — open <b>Send Forms based on a user performed action</b>, pick the trigger (e.g., Registering a new patient), set the Effective Start Date and Primary Provider, set the To Do Recipient, and click <b>Save</b>.", img:"images/ppf-sched-4.png"},
        ]},

      { id:"insync-ppf-manage", title:"Managing Forms", group:"Patient Portal & Forms", short:"Managing Forms",
        lead:"Search, review, edit, retrieve, and track patient forms after they're sent.",
        steps:[
          {text:"In <b>Manage Forms</b>, type the patient's name in the Patient field (wait a few seconds), select them, uncheck <b>Show only filled forms</b> to see everything, and click <b>Search</b>.", img:"images/ppf-manage-1.png"},
          {text:"Narrow results with the <b>Form</b>, <b>Category</b>, <b>Sent From</b> date, and <b>Status</b> filters (Sent, Received, Reviewed, Expired, etc.), then click <b>Search</b>.", img:"images/ppf-manage-2.png"},
          {text:"In the results, use the <b>View</b> icon for a read-only copy, the <b>View and Edit</b> icon to make corrections, and the other icons for delegate details or history.", img:"images/ppf-manage-3.png"},
          {text:"<b>To retrieve a sent form</b> — tick its checkbox and click <b>Retrieve</b> at the top, enter a <b>Retrieve Reason</b> in the pop-up, and click <b>Save</b>.", img:["images/ppf-manage-4.png","images/ppf-manage-4b.png"]},
          {text:"All completed forms are also stored in the patient's <b>Document Manager</b> — click the patient's name, hover over <b>Facesheet</b>, and click <b>Go to Facesheet</b>.", img:["images/ppf-manage-5.png","images/ppf-manage-5b.png"]},
          {text:"<b>View and Edit</b> — click the icon on a form row, make changes, then tick <b>Send To Do and Attach Current Document</b> and pick the recipient.", img:"images/ppf-manage-6.png"},
          {text:"The recipient gets a To Do notification; opening it shows the To Do detail page, where they can view the form, download the document, update the status, reply, or forward.", img:["images/ppf-manage-7.png","images/ppf-manage-7b.png"]},
        ]},

      { id:"insync-paf-add", title:"Adding Patients to the Portal", group:"Patient Access & Forms", short:"Adding to the Portal",
        lead:"Enable a patient's portal access and send their forms (quick version).",
        steps:[
          {text:"Click the <b>Patient Search</b> bookmark and search by name, DOB, MRN, or SSN.", img:"images/paf-add-1.png"},
          {text:"Click the purple <b>Edit icon</b> on the left of the patient's row to open their profile.", img:"images/paf-add-2.png"},
          {text:"Scroll to <b>Patient Delegates and Portal Access</b> and check <b>Enable Portal Login for Patient</b> — the Username fills with the patient's email.", img:"images/paf-add-3.png", note:"Email, Mobile Number, and Primary Provider must be filled first."},
          {text:"Check the <b>Patient Forms</b> box and choose the forms to send from the dropdown.", img:"images/paf-add-4.png"},
          {text:"In <b>Contact Details</b>, confirm the <b>Email</b> and <b>Mobile Number</b> are filled (required for login and OTP).", img:"images/paf-add-5.png"},
          {text:"(Optional) Add a family member or representative under <b>Additional Portal Login</b> — choose the Delegate Type, fill in their details, and click <b>Add</b>.", img:"images/paf-add-6.png"},
          {text:"Scroll down and click <b>Save</b>.", img:"images/paf-add-7.png"},
          {text:"A confirmation shows the patient's <b>Username</b> and <b>Temporary Password</b>, and the patient receives an email with the portal link.", img:"images/paf-add-8.png", note:"The activation link expires in 72 hours."},
        ]},

      { id:"insync-paf-forms", title:"Managing & Sending Forms", group:"Patient Access & Forms", short:"Managing & Sending",
        lead:"Send, schedule, and manage patient forms (quick version).",
        steps:[
          {text:"Open the module via <b>Quick Search → Patient Forms in Patients</b>, or the bookmark in the sidebar.", img:"images/paf-forms-1.png"},
          {text:"In <b>Manage Forms</b>, filter by patient, provider, status, form, category, or date, then click <b>Search</b>. Use the magnifying glass to view a form, or <b>View & Edit</b> to correct one.", img:"images/paf-forms-2.png"},
          {text:"To send a new form, expand <b>Schedule / Send New Patient Form</b>, then open the grey <b>New Patient Form</b> subsection.", img:"images/paf-forms-3.png"},
          {text:"Use the <b>Search Form</b> field or <b>Select Category</b> to find forms, then tick the box next to each form you want to send.", img:"images/paf-forms-4.png"},
          {text:"In the <b>Patient</b> field, search and select the patient(s) — they appear in the Selected Patients panel. Use the red X to remove one.", img:"images/paf-forms-5.png", note:"If a patient doesn't appear, they don't have portal access yet — enable it first."},
          {text:"Set the delivery options — Primary Provider, Facility, Payer, Program — check <b>Send Email</b>, choose a <b>To Do Recipient</b>, and click <b>Save</b>.", img:"images/paf-forms-6.png"},
          {text:"<b>On a schedule</b> — expand <b>Send Forms based on a pre-configured schedule</b>, choose the frequency, and set the recurrence rule.", img:"images/paf-forms-7.png"},
          {text:"Complete the schedule fields — Start Date, Patient Group, Provider, Program, Send Email, To Do Recipient — and click <b>Save</b>.", img:"images/paf-forms-8.png", note:"Auto Expire if Not Submitted expires the form after a set number of days."},
          {text:"<b>On an action</b> — in <b>Send Forms based on a user performed action</b>, pick the trigger (e.g., Registering a new patient), set the Effective Start Date, provider, and recipient, then click <b>Save</b>.", img:"images/paf-forms-9.png"},
        ]},

      { id:"insync-pg-login", title:"First-Time Login", group:"Patient Portal — Patient Guide", short:"First-Time Login",
        lead:"What the patient does to log in for the first time using the credentials emailed to them.",
        steps:[
          {text:"Open the portal link from the confirmation email, enter the <b>Email Address</b> (username) and the <b>Temporary Password</b> (case-sensitive), and click <b>Sign In</b>.", img:"images/pg-login-1.png", note:"If the patient forgot the temporary password, they can use 'Forgot Password?' on the login screen."},
          {text:"Verify identity — enter the <b>Date of Birth</b> (MM/DD/YYYY) and the registered <b>Mobile Number</b>, then click <b>Proceed to Login</b>.", img:"images/pg-login-2.png", note:"Both must exactly match what's on file in InSync."},
          {text:"Enter the 6-digit <b>OTP</b> sent to the patient's email and mobile, then click <b>Verify OTP</b>. If it expired, click the resend icon.", img:"images/pg-login-3.png"},
          {text:"Create a permanent password (at least 8 characters, with 1 uppercase, 1 number, and 1 special character), confirm it, and click <b>Submit</b>.", img:"images/pg-login-4.png"},
          {text:"Back on the login page, sign in with the email and the new permanent password to reach the dashboard.", img:"images/pg-login-5.png"},
        ]},

      { id:"insync-pg-dash", title:"Dashboard", group:"Patient Portal — Patient Guide", short:"Dashboard",
        lead:"The patient's home page after login.",
        steps:[
          {text:"The dashboard shows Messages, Education Material, Upcoming Appointments, and an Account Summary, with the left sidebar linking to every section.", img:"images/pg-dash-1.png"},
          {text:"The <b>Upcoming Appointments</b> panel lists future bookings with date, time, visit type, and status; click <b>View More</b> for the full schedule.", img:"images/pg-dash-2.png", note:"To book or cancel appointments, the patient contacts the practice — booking isn't done in the portal."},
        ]},

      { id:"insync-pg-profile", title:"My Profile", group:"Patient Portal — Patient Guide", short:"My Profile",
        lead:"Where the patient manages personal info, insurance, pharmacy, and communication preferences.",
        steps:[
          {text:"<b>Primary Info</b> — expand each ribbon (My Details, Contact, Employer/School, Saved Cards, Emergency Contact) to update it, then click <b>Save & Submit</b>.", img:"images/pg-profile-1.png"},
          {text:"<b>Insurance Details</b> — review the already-saved list first (Edit if it's there); otherwise search the insurance, fill in policy/group numbers and subscriber details, and click <b>Save</b>.", img:"images/pg-profile-2.png", note:"Always review the saved list first to avoid duplicates."},
          {text:"<b>Pharmacy Details</b> — search by name or address, select a pharmacy, click <b>Add to Favorite</b>, and use <b>Set to Default</b> for the preferred one.", img:"images/pg-profile-3.png"},
          {text:"<b>Preferences</b> — choose appointment-reminder channels (Voice, Email, Text) and other practice communication options.", img:"images/pg-profile-4.png"},
        ]},

      { id:"insync-pg-forms", title:"Forms & Signatures", group:"Patient Portal — Patient Guide", short:"Forms & Signatures",
        lead:"How the patient completes and signs the forms assigned by the practice.",
        steps:[
          {text:"Click <b>Forms/Documents</b> in the sidebar (a red badge shows pending forms), open a form by its blue name link, fill in all fields, add a signature, and click <b>Save & Submit</b>.", img:"images/pg-forms-1.png"},
          {text:"<b>Manual signature</b> — click the pen icon, draw the signature in the box, click <b>Accept</b>, then <b>Save & Submit</b>.", img:"images/pg-forms-2.png"},
          {text:"<b>Type signature</b> — click the pen icon, switch to the <b>Type</b> tab, type the name, pick a handwriting font, click <b>Accept</b>, then <b>Save & Submit</b>.", img:"images/pg-forms-3.png"},
        ]},

      { id:"insync-pg-tx", title:"Treatment Plan & Lab Results", group:"Patient Portal — Patient Guide", short:"Treatment Plan & Labs",
        lead:"Signing treatment plans and viewing released lab results.",
        steps:[
          {text:"<b>Treatment Plan</b> — click it in the sidebar (a badge shows pending plans), click <b>Sign Treatment Plan</b>, review, and sign. Signed plans move to Submitted Treatment Plans.", img:"images/pg-tx-1.png"},
          {text:"<b>Lab Results</b> — click it in the sidebar and pick a Category (Lab, Radiology, or Special Studies) to view released results.", img:"images/pg-tx-2.png", note:"Results are only visible after the provider releases them."},
        ]},

      { id:"insync-pg-msg", title:"Messages", group:"Patient Portal — Patient Guide", short:"Messages",
        lead:"How the patient reads, replies to, and sends secure messages with the practice.",
        steps:[
          {text:"Click <b>Messages</b> in the sidebar (or the Messages tile on the dashboard). It has Inbox, Compose, and Sent Messages tabs.", img:"images/pg-msg-1.png", note:"Provider To-Do items from InSync also appear here, and replies route back to the provider's To-Do."},
          {text:"In the <b>Inbox</b>, unread messages are at the top (urgent ones in red). Click <b>Open</b> to read, <b>Reply</b> to respond, or check a box and <b>Delete</b> to remove.", img:"images/pg-msg-2.png"},
          {text:"Read messages move to the <b>Read Messages</b> section; use the search bar to find messages, and enable Show Auto Archived Old Messages for older ones.", img:"images/pg-msg-3.png"},
          {text:"<b>Compose</b> — click the tab, pick the recipient in the To field, set Priority, add a Subject and any attachments, type the message, check the acknowledgment box, and click <b>Send</b>.", img:"images/pg-msg-4.png", note:"For emergencies the patient should call 911 — messages may not be reviewed immediately."},
          {text:"<b>Sent Messages</b> — click the tab to see all sent messages (including automatic form-submission records); click <b>Open</b> to view any of them.", img:"images/pg-msg-5.png"},
        ]},
    ]
  },

  lauris: {
    name:"Lauris", icon:"🧪",
    blurb:"Lauris workflows and day-to-day tasks.",
    topics:[
      { id:"lauris-login", title:"Logging in & Navigation",
        lead:"Help a new user sign into Lauris and find their way around.",
        steps:[
          {text:"Open Lauris and sign in using the <b>username and password</b> assigned to the user.",},
          {text:"Look at the <b>main menu</b> together and point out the areas they'll use most often.",},
          {text:"Set up any <b>favorites or default settings</b> so their daily tasks are quicker to reach.",},
        ]},

      { id:"lauris-escribe-single", title:"E-Scribe (Rcopia) Setup — Single Patient",
        lead:"Link one patient to DrFirst for electronic prescriptions by giving them a Rcopia ID in Lauris.",
        steps:[
          {text:"From the Lauris Online dashboard, click <b>Applications</b> in the left sidebar. It's near the bottom of the left menu and has a grid/app icon.",},
          {text:"In the Applications section, click <b>RCopia Management (DrFirst) v4.00</b> — this opens the screen where you manage patients' prescribing IDs.",},
          {text:"Click the <b>Consumers</b> dropdown and choose <b>Consumers Needing Rcopia ID</b>.", note:"Use this filter for a new patient, or any existing patient who still needs a Rcopia ID assigned."},
          {text:"Now find the patient one of two ways: type their ID in the <b>Search by Consumer</b> box and click <b>Load Consumers</b>; OR click the <b>binocular icon</b> next to that box to open the Consumer Lookup pop-up.", note:"Use the binocular icon when you only have the patient's name, not their ID number."},
          {text:"If you used the pop-up: type the ID or name, click <b>Search Consumers</b>, then click the <b>right-arrow</b> next to the correct patient. Their ID fills into the search box — then click <b>Load Consumers</b>.",},
          {text:"When the patient appears in the table, <b>tick the checkbox</b> next to their name, then click the <b>Update Selected</b> button below the table.",},
          {text:"A pop-up asks \"This will update all selected items in the list. Continue?\" — click <b>OK</b> to finish.", note:"To confirm it worked, switch the Consumers dropdown to \"Consumers With Rcopia ID\" and check the patient now appears there."},
        ]},

      { id:"lauris-escribe-bulk", title:"E-Scribe (Rcopia) Setup — Bulk Registration",
        lead:"Register many patients who need a Rcopia ID all at once, instead of one at a time.",
        steps:[
          {text:"Click <b>Applications</b> in the left sidebar, then open <b>RCopia Management (DrFirst) v4.00</b>.",},
          {text:"Click the <b>Consumers</b> dropdown, choose <b>Consumers Needing Rcopia ID</b>, then click <b>Load Consumers</b>. This lists everyone who still needs an ID.",},
          {text:"Click the <b>Home Phone</b> column header to <b>sort</b> the list.", note:"Sorting by Home Phone groups together patients with missing contact info — those records may be incomplete and should be fixed before registering."},
          {text:"Go to the <b>last pages</b> of the list and review each patient for any missing information.",},
          {text:"<b>Tick the checkboxes</b> next to the patients who have complete information.",},
          {text:"Click <b>Update Selected</b> to register all the checked patients at once, then repeat for the remaining pages.", note:"Use \"Update All\" only if every patient on the current page needs registering."},
        ]},

      { id:"lauris-delete-images", title:"Deleting Images Permanently",
        lead:"Permanently remove a scanned document or image from Lauris using the Management Console.",
        steps:[
          {text:"Log in to Lauris, then click <b>Configuration</b> in the left-hand menu — it's at the bottom of the panel.", note:"Only authorized administrators can open Configuration settings."},
          {text:"On the Configuration page, click <b>Management Console</b> in the top navigation links.",},
          {text:"Click the <b>Show Images to Remove</b> button. You can filter the list by date, week, month, or year.",},
          {text:"Review the table — it shows Added Date, Form, STBID, Unique ID, Name, Who Removed, and Region. Find the document you want to delete.",},
          {text:"Check the date, then click the <b>Delete (X) icon</b> next to that document.", note:"Use the magnifying-glass icon to preview a document first, or the green tick mark to mark it \"Do Not Delete,\" which sends it back to the profile."},
          {text:"A confirmation pop-up appears — click <b>OK</b> to delete it permanently.", note:"This cannot be undone. Best practice: don't delete files from the day before — leave them for 24 hours in case someone needs them recalled."},
        ]},
    ]
  },

  networking: {
    name:"Networking", icon:"🌐",
    blurb:"Connectivity, Wi-Fi, shared drives, VPN, and the common network fixes you handle daily.",
    topics:[
      { id:"net-cheatsheet", title:"Networking Cheat Sheet",
        lead:"A complete working reference for IT support — addressing, devices, protocols, wireless, cabling, troubleshooting, firewalls, and VLANs. Use the table of contents inside to jump around.",
        embed:"networking-cheat-sheet.html" },
      { id:"net-nointernet", title:"No Internet Connection",
        lead:"A computer that's plugged in with a cable can't reach the internet or company systems.",
        steps:[
          {text:"Look at the <b>network cable</b> (it looks like a thick phone cable) and make sure it's firmly plugged into both the computer and the wall socket. You'll hear a small click when it's in properly.",},
          {text:"Check the <b>network icon</b> at the bottom-right of the screen, near the clock. A red X or a globe with a warning means there's no connection.",},
          {text:"<b>Restart the computer</b> — click Start, then the power icon, then Restart. This fixes many connection problems on its own.",},
          {text:"If it still won't connect, try plugging the cable into a <b>different wall socket</b>, or try a cable you know works.", note:"A wall socket can go bad — if another one works, report the original."},
          {text:"If several people nearby lose internet at the same time, it's a bigger network problem, not one computer — let the network admin know.",},
        ]},

      { id:"net-wifi", title:"Wi-Fi Won't Connect",
        lead:"A laptop or device can't join the company wireless (Wi-Fi) network.",
        steps:[
          {text:"Make sure <b>Wi-Fi is turned on</b>. Click the network icon at the bottom-right (near the clock) and check the Wi-Fi button is highlighted, not greyed out.", note:"Some laptops have a physical switch or a keyboard key (often with an antenna picture) that can turn Wi-Fi off by accident."},
          {text:"In that same panel, find the <b>company network name</b> in the list and click <b>Connect</b>.",},
          {text:"If it won't connect, click the network name, choose <b>Forget</b>, then connect again and re-type the password.", note:"This clears out an old saved password and fixes most Wi-Fi problems."},
          {text:"Turn Wi-Fi off and back on, or restart the device, and check whether other devices can still get on the same Wi-Fi.",},
        ]},

      { id:"net-slow", title:"Slow Internet / Network",
        lead:"The internet works but websites and systems load slowly.",
        steps:[
          {text:"<b>Restart the computer</b> first, then check if it's still slow.",},
          {text:"Notice whether <b>everything</b> is slow or just <b>one website</b> — if it's only one site, the problem is likely that site, not your connection.",},
          {text:"Ask if coworkers nearby are also slow. If they are, it's a network issue rather than this one computer.",},
          {text:"If on Wi-Fi, check the signal strength (the curved bars on the network icon). Move closer to a Wi-Fi point, or plug in a cable to compare.", note:"A weak Wi-Fi signal is one of the most common reasons for \"slow internet.\""},
          {text:"Close any large downloads, video streaming, or updates that might be using up the connection, then test again.",},
        ]},

      { id:"net-cable", title:"Ethernet Cable Not Connecting",
        lead:"A computer with a network cable still says it isn't connected.",
        steps:[
          {text:"<b>Unplug and replug</b> the cable at both ends — the computer and the wall — until you hear it click into place.",},
          {text:"Look for a small <b>light next to the cable port</b> on the computer. No light usually means the connection isn't active.",},
          {text:"Try a <b>different cable</b> that you know works.", note:"Cables fail more often than people expect — the little plastic clip breaks, or a wire comes loose inside."},
          {text:"Try a <b>different wall socket</b>. If a new socket works, label the bad one and report it.",},
          {text:"If no cable and no socket work, the computer's network part may be faulty — escalate it.",},
        ]},

      { id:"net-mapdrive", title:"Mapping a Shared Network Drive",
        lead:"Give a user a permanent shortcut (a drive letter) to a shared folder on the network.",
        steps:[
          {text:"Open <b>File Explorer</b> — the yellow folder icon on the taskbar at the bottom of the screen.",},
          {text:"On the left side, <b>right-click \"This PC\"</b> and choose <b>Map network drive</b>.",},
          {text:"Pick any free <b>drive letter</b> from the dropdown — it doesn't matter which one.",},
          {text:"In the <b>Folder</b> box, type the network path to the shared folder. Your IT records will have the exact text to copy — it begins with two back-slash characters.", note:"Type it exactly as recorded; even one wrong character will stop it from connecting."},
          {text:"Tick the box <b>\"Reconnect at sign-in\"</b> so the shortcut comes back every time, then click <b>Finish</b>.", note:"Without this box ticked, the shortcut disappears the next time they log off."},
          {text:"Check the user can open the new drive and see the files they should have.",},
        ]},

      { id:"net-sharedfolder", title:"Can't Access a Shared Folder",
        lead:"A user gets an error when trying to open a shared folder on the network.",
        steps:[
          {text:"First, confirm the user is <b>connected to the network</b> (and on VPN if they're working from home), and that other network things work for them.",},
          {text:"Have them <b>close the folder and open it again</b>, or restart the computer to refresh the connection.",},
          {text:"Read the <b>exact error message</b>. \"Access denied\" means they're connected but don't have permission. \"Not found\" means a connection or path problem.", note:"\"Access denied\" is a permissions request for the admin — the folder itself is reachable."},
          {text:"For \"access denied,\" check the user is in the correct access group; if not, request that access be added.",},
        ]},

      { id:"net-printer", title:"Connecting a Network Printer",
        lead:"Add a shared office printer to a computer.",
        steps:[
          {text:"Find the printer's <b>IP address</b> — a set of numbers like 192.168.1.50. It's often on a sticker on the printer, or you can print an information page from its menu.",},
          {text:"On the computer, click <b>Start</b> (Windows logo, bottom-left corner), then <b>Settings</b> (the gear icon).",},
          {text:"Click <b>Bluetooth & devices</b>, then <b>Printers & scanners</b>, then <b>Add device</b>.",},
          {text:"If the printer appears in the list, click <b>Add device</b> next to it.",},
          {text:"If it doesn't appear, click <b>\"Add manually\"</b>, choose to add by <b>IP address</b>, and type in the numbers from the first step.",},
          {text:"Let it install, then print a <b>test page</b>.", note:"If the print looks garbled or comes out blank, the wrong model was chosen — remove it and add it again with the exact model number."},
        ]},

      { id:"net-printoffline", title:"Printer Shows Offline / Won't Print",
        lead:"A printer that used to work has stopped printing.",
        steps:[
          {text:"Walk over and check the <b>printer itself</b> — is it switched on, is it out of paper, and are there any error messages or paper jams on its little screen?",},
          {text:"On the computer, open the printer's queue (Settings → Printers & scanners → click the printer → Open queue) and <b>delete any stuck jobs</b> waiting in the list.", note:"One failed print job can freeze the whole list and block everything behind it."},
          {text:"In that same window, find <b>\"Use Printer Offline\"</b> and make sure it is <b>unticked</b>.",},
          {text:"<b>Restart the computer</b> (and the printer if needed), then print a test page again.",},
        ]},

      { id:"net-vpn", title:"VPN Setup & Troubleshooting",
        lead:"Connect a work-from-home user securely to the company network using VPN.",
        steps:[
          {text:"Explain it simply: the <b>VPN</b> is a secure tunnel that makes a home computer act like it's in the office, so it can reach company files and systems.",},
          {text:"Open the company <b>VPN app</b> and sign in with the user's network username and password.",},
          {text:"Make sure the user already has <b>working internet at home first</b> — the VPN needs internet to run on top of.", note:"No internet means the VPN can't connect, so always check basic internet first."},
          {text:"If it won't connect, <b>disconnect and reconnect</b>, or close and reopen the VPN app.",},
          {text:"Once it says connected, check the user can open the company systems and shared drives that need the VPN.",},
        ]},

      { id:"net-ipconfig", title:"Refreshing a Bad Network Address",
        lead:"Fix a computer that's stuck without a proper network address by refreshing it.",
        steps:[
          {text:"Click the <b>Start</b> button (Windows logo, bottom-left) and type the letters <b>cmd</b>.",},
          {text:"In the results, click <b>Command Prompt</b> — a black window with white text opens.", note:"Don't worry about the plain black screen — this is a normal Windows tool for network commands."},
          {text:"Type <b>ipconfig /release</b> exactly, then press <b>Enter</b>. This lets go of the current address.",},
          {text:"Type <b>ipconfig /renew</b>, then press <b>Enter</b>. This asks the network for a fresh address.", note:"If the address shown starts with 169.254, the computer never got a proper one — this renew step usually fixes that."},
          {text:"Type <b>ipconfig</b> and press Enter to confirm a normal address came back, then test the connection.",},
        ]},
    ]
  },

  hardware: {
    name:"Hardware", icon:"🖥️",
    blurb:"Workstations, peripherals, and the common hardware fixes you handle daily.",
    topics:[
      { id:"hw-setup", title:"New Workstation Setup",
        lead:"A step-by-step checklist for setting up a brand-new computer for a user.",
        steps:[
          {text:"Unbox everything and connect the <b>monitor(s), keyboard, mouse, and network cable</b> to the computer, then plug the computer and monitor into power.",},
          {text:"Press the <b>power button</b> to turn it on, then follow the on-screen Windows setup prompts.",},
          {text:"<b>Join the computer to the company network/domain</b> — this is what gives the user their company login and access to shared files.", note:"If you're unsure how to join the domain, your IT setup notes will have the exact steps for your environment."},
          {text:"Install the programs the user needs (EHR, Office, web browser, antivirus) and run all <b>Windows updates</b>.",},
          {text:"Have the user <b>log in once</b> to confirm their email and access all work, then stick the asset tag/label on the computer.",},
        ]},

      { id:"hw-nopower", title:"Computer Won't Turn On",
        lead:"A computer shows no signs of life — no lights, no sound, blank screen.",
        steps:[
          {text:"Check the <b>power cable</b> is firmly plugged into both the computer and the wall. Test the wall socket with something else (a lamp or phone charger) to be sure it has power.",},
          {text:"If it's plugged into a <b>power strip</b>, make sure the strip is switched on and hasn't tripped (some have a reset button).",},
          {text:"<b>Press and hold the power button for about 10 seconds</b>, let go, then press it once to turn on.", note:"Holding it drains leftover power and clears many \"won't turn on\" problems."},
          {text:"If you now hear fans or see lights but the screen stays black, it's a screen problem — see \"Monitor / Display Not Working\" instead.",},
          {text:"If it's still completely dead, note the asset tag and arrange a repair or swap in a spare computer.",},
        ]},

      { id:"hw-display", title:"Monitor / Display Not Working",
        lead:"The computer is on, but the screen is black or says \"No Signal.\"",
        steps:[
          {text:"Check the <b>monitor's own power button</b> is on — there's usually a small light on it.",},
          {text:"Make sure the <b>video cable</b> between the monitor and computer is firmly plugged in at both ends.",},
          {text:"Most monitors have a button to choose the <b>input source</b> (such as HDMI, DisplayPort, or VGA). Press it and pick the one that's actually connected.", note:"A monitor set to the wrong input shows \"No Signal\" even when everything is plugged in correctly."},
          {text:"Try a <b>different cable</b>, or test the monitor on another computer, to find out whether it's the screen or the computer at fault.",},
        ]},

      { id:"hw-dualmon", title:"Setting Up Dual Monitors",
        lead:"Add a second screen so a user can spread their work across two displays.",
        steps:[
          {text:"Plug the <b>second monitor</b> into a spare video port on the computer and turn the monitor on.",},
          {text:"On the keyboard, hold the <b>Windows key</b> and press the <b>P</b> key — a small menu appears on the right side.",},
          {text:"Choose <b>Extend</b> from that menu.", note:"\"Extend\" spreads your desktop across both screens; \"Duplicate\" just shows the same thing on both."},
          {text:"To line the screens up with how they sit on the desk: click Start → Settings → System → Display, then <b>drag the numbered boxes</b> left or right to match.",},
          {text:"Pick which one is the <b>main screen</b>, and check the mouse moves smoothly from one screen to the other.",},
        ]},

      { id:"hw-kbmouse", title:"Keyboard or Mouse Not Working",
        lead:"A keyboard or mouse has stopped responding.",
        steps:[
          {text:"For a <b>wired</b> one: unplug it and plug it into a <b>different USB port</b> (the small rectangular sockets), ideally one directly on the computer rather than a hub.",},
          {text:"For a <b>wireless</b> one: change or recharge the <b>batteries</b>, and make sure the little USB receiver is plugged in.", note:"A flat battery is the most common reason a wireless keyboard or mouse seems \"broken.\""},
          {text:"Try the device on <b>another computer</b> to see whether the device or the port is the problem.",},
          {text:"If it works on another computer, restart the original one; if it works on none, swap in a replacement.",},
        ]},

      { id:"hw-audio", title:"No Sound / Audio Issues",
        lead:"A user can't hear any sound from their speakers or headphones.",
        steps:[
          {text:"Check the sound isn't <b>muted</b> and the volume is turned up — click the <b>speaker icon</b> at the bottom-right of the screen and slide the volume up.",},
          {text:"Click that speaker icon and make sure the correct <b>output device</b> (speakers or headphones) is selected.", note:"Windows often switches to the wrong device after you plug in a headset or a monitor that has speakers."},
          {text:"Unplug and replug the speakers or headphones to make sure they're seated properly.",},
          {text:"Test with a <b>different headset</b> to find out whether it's the device or the computer.",},
        ]},

      { id:"hw-headset", title:"Headset & Microphone Setup",
        lead:"Get a headset working for calls and video sessions.",
        steps:[
          {text:"Plug the headset into the computer (a USB plug or the round audio jack) and give Windows a few seconds to recognize it.",},
          {text:"Click <b>Start → Settings → System → Sound</b>.",},
          {text:"Under <b>Output</b>, choose the headset for sound; under <b>Input</b>, choose the headset's microphone.",},
          {text:"Use the <b>\"Test your microphone\"</b> bar on that page and speak — the bar should move.", note:"If the bar doesn't move, the wrong microphone is selected, or the headset has a little mute switch on its cable."},
          {text:"In the calling app (Teams, Zoom, etc.), open its own audio settings and choose the same headset there too.",},
        ]},

      { id:"hw-webcam", title:"Webcam Not Working",
        lead:"The camera isn't showing up, or shows a black picture in video calls.",
        steps:[
          {text:"Check for a <b>physical cover or slider</b> on the camera and make sure it's open.", note:"Many laptops have a tiny privacy shutter that slides across the camera."},
          {text:"Close any other program that might be using the camera, then close and reopen the calling app.",},
          {text:"Click <b>Start → Settings → Privacy & security → Camera</b> and make sure <b>camera access is turned on</b>.", note:"A turned-off privacy setting is a very common reason a camera seems dead."},
          {text:"For a plug-in (external) webcam, unplug and replug the USB connector, or try a different port.",},
        ]},

      { id:"hw-usb", title:"USB Device Not Recognized",
        lead:"A USB stick, scanner, or other plug-in device isn't showing up.",
        steps:[
          {text:"Unplug it and try a <b>different USB port</b>, directly on the computer rather than a hub or extension.",},
          {text:"Try the same device on <b>another computer</b> to check the device itself isn't broken.",},
          {text:"<b>Restart the computer</b> — this makes Windows look for devices again and fixes many of these.",},
          {text:"If only one port is failing, note which one and flag the computer for a check.",},
        ]},

      { id:"hw-charging", title:"Laptop Not Charging",
        lead:"A laptop's battery isn't charging, or the charger seems dead.",
        steps:[
          {text:"Make sure the charger is plugged in firmly at <b>both ends</b> — into the laptop and the wall — and that the wall socket works.",},
          {text:"Look at the <b>charging port</b> for dust or damage, and check for a small charging light on the laptop or charger.",},
          {text:"Try a <b>different charger</b> that's made for that laptop model.", note:"A charger that's too weak (wrong wattage) may keep the laptop running but never actually charge the battery."},
          {text:"If it still won't charge with a charger you know is good, arrange a battery or port repair.",},
        ]},

      { id:"hw-slow", title:"Slow Computer Performance",
        lead:"A computer has become slow or keeps freezing.",
        steps:[
          {text:"Save any open work and <b>restart the computer</b> (Start → power icon → Restart). Many slowdowns clear up with a fresh restart.",},
          {text:"Open <b>Task Manager</b> by pressing the <b>Ctrl, Shift, and Esc</b> keys together. This shows what the computer is busy doing.", note:"Click the \"CPU\" or \"Memory\" column heading to sort and quickly spot the program using the most."},
          {text:"Close programs and browser tabs that aren't needed, and check that a <b>Windows update</b> isn't running in the background.",},
          {text:"Check the computer isn't almost out of <b>storage space</b> — a nearly full drive makes everything slow. Clear temporary files if it's low.",},
        ]},

      { id:"hw-dock", title:"Docking Station Setup",
        lead:"Connect a laptop to a docking station so it works with monitors, keyboard, and network at the desk.",
        steps:[
          {text:"A <b>docking station</b> is a box that lets a laptop connect to everything on the desk with one cable. Plug the dock into power first.",},
          {text:"Connect the dock to the laptop with its main cable (usually <b>USB-C</b> or Thunderbolt).",},
          {text:"Plug the monitors, keyboard, mouse, and network cable into the <b>dock</b> — not the laptop.",},
          {text:"Check the laptop is charging through the dock and the external screens turn on.", note:"If the screens don't come on, hold the Windows key and press P, then choose Extend."},
          {text:"If screens or ports act up, install the dock's driver/firmware update.",},
        ]},
    ]
  },
};

/* ============================================================
   STEP IMAGES — maps screenshots to steps by topic id.
   Each array matches the topic's steps in order (0 = first step).
   Use null for steps with no image. Files live in the images/ folder.
   To change an image, just edit the filename here.
   ============================================================ */
const STEP_IMAGES = {
  "insync-addendum":[null,"images/insync-addendum-2.png","images/insync-addendum-3.png","images/insync-addendum-4.png","images/insync-addendum-5.png","images/insync-addendum-6.png","images/insync-addendum-7.png","images/insync-addendum-8.png","images/insync-addendum-9.png","images/insync-addendum-10.png","images/insync-addendum-11.png"],
  "insync-export-payors":["images/insync-export-1.png",null,"images/insync-export-3.png","images/insync-export-4.png","images/insync-export-5.png"],
  "lauris-delete-images":["images/lauris-delete-1.png","images/lauris-delete-2.png","images/lauris-delete-3.png","images/lauris-delete-4.png","images/lauris-delete-5.png","images/lauris-delete-6.png"],
  "lauris-escribe-single":["images/lauris-escribe-1.png","images/lauris-escribe-2.png","images/lauris-escribe-3.png","images/lauris-escribe-4.png","images/lauris-escribe-5.png","images/lauris-escribe-6.png","images/lauris-escribe-7.png"],
  "lauris-escribe-bulk":[null,"images/lauris-bulk-2.png","images/lauris-bulk-3.png",null,"images/lauris-bulk-5.png",null],
};
