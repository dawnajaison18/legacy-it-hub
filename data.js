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

      { id:"insync-create-group", title:"Creating a Patient Group",
        lead:"Set up a new patient group in InSync, used for group therapy sessions.",
        steps:[
          {text:"From the <b>Quick Search</b> bar in the top-left corner of the Dashboard, type <b>GROUPS</b> and select <b>Patient Groups in Patients</b>.", img:"images/insync-creategroup-1.png"},
          {text:"On the Patient Groups screen, click <b>Create Patient Group</b> to open the creation form.", img:"images/insync-creategroup-2.png"},
          {text:"Complete all required fields in the form, then click <b>Save</b>.", img:"images/insync-creategroup-3.png", note:"Fields: (1) Group Name — a unique name for the group. (2) Effective Start Date — when the group becomes active. (3) Effective End Date — optional; leave blank if ongoing. (4) Select Provider — the provider for this group. (5) Add Patients — search by First Name, Last Name, MRN, or SSN; chosen patients appear in the Selected Patients panel on the right. (6) Save."},
        ]},

      { id:"insync-manage-groups", title:"Managing Patient Groups",
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

      { id:"insync-schedule-group", title:"Scheduling a Group Appointment",
        lead:"Book a group therapy session on the Scheduler, and verify each patient's details first.",
        steps:[
          {text:"Open the <b>Scheduler</b> using the Scheduler icon, then select the date, day, and time for the group. A booking pop-up appears.", img:"images/insync-sch-select.png"},
          {text:"Complete the booking form: set the <b>Patient/Group</b> (the group name), the <b>Program</b>, the <b>Visit Status</b> (set to Pending), and the <b>Visit Type</b> (which group encounter type is being scheduled).", img:"images/insync-sch-booking.png", note:"The POS Code auto-populates if it was mapped to the group when the group was created."},
          {text:"Before booking, expand the <b>Group Details</b> ribbon to see all the group's patients.", img:"images/insync-sch-verify.png"},
          {text:"Select each patient one by one and verify their <b>Primary Insurance</b>, <b>Secondary Insurance</b> (if any), <b>Primary Authorization</b>, and <b>Secondary Authorization</b>. Repeat for every patient in the group.", note:"Verifying insurance and authorization before booking avoids billing problems later."},
          {text:"Once all patients are verified, click <b>Book Appointment</b>. A success message appears, and the group shows as a light-blue ribbon on the Scheduler — the orange number shows how many patients are booked.", img:["images/insync-sch-booked-1.png","images/insync-sch-booked-2.png"]},
          {text:"<b>To add a patient later (on the fly)</b> — hover over the group encounter name on the Scheduler until a hyperlink appears, then click it to open the pop-up.", img:"images/insync-sch-booked-2.png"},
          {text:"Select the patient from the pop-up, set their <b>Visit Status</b>, then click <b>Book Appointment</b>. Repeat for each additional patient.", img:"images/insync-sch-otf-booking.png"},
          {text:"The patient count on the Scheduler increases by one (for example, from 2 to 3).", img:"images/insync-sch-otf-count.png"},
        ]},

      { id:"insync-group-note", title:"Documenting a Group Therapy Note",
        lead:"Complete a group therapy note in three phases — the shared group note, each patient's individual note, and the charting elements.",
        steps:[
          {text:"<b>Prerequisite:</b> make sure every patient has the <b>Group Program</b> added on the Patient Group screen before you start.",},
          {text:"From the <b>Scheduler</b>, click the group appointment to open the menu, then select <b>Check In & Start Encounter</b>. This opens the Group Therapy Notes page.", img:["images/insync-gn-start-1.png","images/insync-gn-start-2.png"]},
          {text:"<b>Phase 1 — Group Note:</b> select the patients you want to include in the group note.", img:"images/insync-gn-p1-select.png"},
          {text:"Choose <b>Group</b> from the Template dropdown, then fill out the note completely — the <b>Subjective</b> field, the <b>Plan</b>, and tick all applicable <b>Therapeutic Interventions</b> checkboxes.", img:"images/insync-gn-p1-fill.png"},
          {text:"Click <b>Add to Patient Chart</b> — a success message appears. Then minimize the Group Note bar using the upward arrow (▲) to move on to Individual Notes.", img:["images/insync-gn-p1-success-1.png","images/insync-gn-p1-success-2.png"]},
          {text:"<b>Phase 2 — Individual Notes:</b> for each patient, either (A) click the arrow next to the Template dropdown on the Individual Notes bar, pick the patient, and choose <b>Group Note - Individual</b>; or (B) tick the patient's checkbox in <b>Group Members</b> so their name auto-fills, then choose <b>Group Note - Individual</b>.", img:["images/insync-gn-p2-template-1.png","images/insync-gn-p2-template-2.png"]},
          {text:"Fill out the individual note completely and click <b>Save</b>. A <b>\"Data Saved Successfully\"</b> message appears. Repeat for every patient in the group.", img:["images/insync-gn-p2-fill-1.png","images/insync-gn-p2-fill-2.png"]},
          {text:"<b>Phase 3 — Charting Elements:</b> click the <b>Charting Elements</b> icon on the Group Member section, then complete all required tabs for each member.", img:"images/insync-gn-p3-open.png"},
          {text:"Fill out all the details across <b>Individual Notes, Group Notes, Diagnosis, CFARS/FARS, and Visit Codes</b>, then click <b>Save</b>.", img:"images/insync-gn-p3-fill.png"},
          {text:"Click the <b>Go to Group Therapy</b> icon to return to the group encounter, and repeat for each patient. Once all patients are done, click <b>END ENCOUNTER</b>.", img:["images/insync-gn-p3-close-1.png","images/insync-gn-p3-close-2.png"], note:"If a required element is missed, InSync shows a restriction alert. A patient's name turns orange once their encounter is closed."},
          {text:"Complete the required details in the <b>End Encounter</b> pop-up and click <b>Sign</b>.", img:"images/insync-gn-end.png"},
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
