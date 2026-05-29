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
    blurb:"Connectivity, Wi-Fi, shared drives, VPN, and the common network fixes you handle daily.",
    topics:[
      { id:"net-nointernet", title:"No Internet Connection",
        lead:"A wired workstation can't reach the internet or company systems.",
        steps:[
          {text:"Check the <b>network cable</b> is firmly plugged into both the PC and the wall port, and look for a link light on the port.",},
          {text:"Look at the network icon in the taskbar — note whether it shows 'No internet', a red X, or a globe.",},
          {text:"Restart the PC, then try a different <b>wall port</b> or a known-good cable to rule out the cable or jack.", note:"A dead wall jack is common — testing another port quickly tells you if it's the PC or the network drop."},
          {text:"If multiple users are affected, it's likely the switch or upstream network, not one PC — escalate to the network admin.",},
        ]},

      { id:"net-wifi", title:"Wi-Fi Won't Connect",
        lead:"A laptop or device can't join the wireless network.",
        steps:[
          {text:"Confirm <b>Wi-Fi is turned on</b> (check the taskbar icon and any physical Wi-Fi switch/function key on laptops).",},
          {text:"Click the Wi-Fi icon, select the correct company network, and choose <b>Connect</b>.",},
          {text:"If it won't connect, click <b>Forget</b> the network, then reconnect and re-enter the password/credentials.", note:"Forgetting and rejoining clears a saved bad password or stale settings — fixes most Wi-Fi issues."},
          {text:"Toggle Wi-Fi off and on, or restart the device, and confirm other devices can still reach the same network.",},
        ]},

      { id:"net-slow", title:"Slow Internet / Network",
        lead:"Connection works but pages and systems load slowly.",
        steps:[
          {text:"Restart the PC and confirm whether the slowness affects <b>one site</b> or everything.",},
          {text:"Check whether other users nearby are also slow — if so, it's a network issue, not the one PC.",},
          {text:"On Wi-Fi, check signal strength; move closer to an access point or switch to a <b>wired connection</b> to compare.", note:"A weak Wi-Fi signal is a frequent cause of 'slow internet' complaints."},
          {text:"Close large downloads, updates, or streaming that may be using bandwidth, then retest.",},
        ]},

      { id:"net-cable", title:"Ethernet Cable Not Connecting",
        lead:"A wired connection shows 'unplugged' or 'no network' even when cabled.",
        steps:[
          {text:"Reseat the cable at both ends until you hear the clip <b>click</b>, and check for a link light at the PC's port.",},
          {text:"Swap in a <b>known-good cable</b> to rule out a damaged one.", note:"Cables fail silently — the clip breaks or a wire pulls loose inside the connector."},
          {text:"Try a different wall jack; if a new jack works, label the bad one and report it.",},
          {text:"If no jack works, suspect the PC's network adapter and escalate.",},
        ]},

      { id:"net-mapdrive", title:"Mapping a Shared Network Drive",
        lead:"Give a user a permanent drive letter for a shared folder.",
        steps:[
          {text:"Open <b>File Explorer</b>, right-click <b>This PC</b>, and choose <b>Map network drive</b>.",},
          {text:"Pick a drive letter and enter the folder path in the form <b>\\\\server\\sharename</b>.",},
          {text:"Tick <b>Reconnect at sign-in</b> so the drive returns after every restart, then click Finish.", note:"Without 'Reconnect at sign-in', the mapping disappears the next time they log off."},
          {text:"Confirm the user can open the drive and see the files they're supposed to have access to.",},
        ]},

      { id:"net-sharedfolder", title:"Can't Access a Shared Folder",
        lead:"A user gets an error opening a shared drive or network folder.",
        steps:[
          {text:"Confirm the user is <b>on the network</b> (wired or VPN if remote) and other network resources work.",},
          {text:"Have them close and reopen the mapped drive, or restart to refresh the connection.",},
          {text:"Note the exact error — 'access denied' is a <b>permissions</b> issue, while 'not found' is a path or connectivity issue.", note:"'Access denied' means it's a permissions request for the admin; the folder itself is reachable."},
          {text:"For access-denied, verify the user is in the correct security group; escalate the permission request if needed.",},
        ]},

      { id:"net-printer", title:"Connecting a Network Printer",
        lead:"Add a shared network printer for a workstation.",
        steps:[
          {text:"Find the printer's <b>IP address</b> or network name (often printed on a config page from the printer).",},
          {text:"On the PC, open <b>Settings → Bluetooth & devices → Printers & scanners → Add device</b>.",},
          {text:"If it isn't found automatically, choose <b>Add manually</b> and add it by IP address or hostname.",},
          {text:"Install the correct driver for that exact model and print a test page.", note:"The wrong driver causes garbled or blank prints — always match the exact model number."},
        ]},

      { id:"net-printoffline", title:"Printer Shows Offline / Won't Print",
        lead:"A previously working network printer stops printing.",
        steps:[
          {text:"Check the printer itself is <b>powered on</b>, connected to the network, and free of errors or paper jams on its display.",},
          {text:"On the PC, open the printer queue and clear any <b>stuck jobs</b> at the top of the list.", note:"One failed job can freeze the whole queue and block everything behind it."},
          {text:"Right-click the printer and uncheck <b>Use Printer Offline</b> if it's set.",},
          {text:"Restart the <b>Print Spooler</b> service (or restart the PC) and send a test page.",},
        ]},

      { id:"net-vpn", title:"VPN Setup & Troubleshooting",
        lead:"Connect a remote user securely to the company network.",
        steps:[
          {text:"Open the company VPN client and sign in with the user's <b>network credentials</b>.",},
          {text:"Confirm the user first has a working internet connection — the VPN runs on top of it.", note:"No internet means no VPN; always confirm basic connectivity first."},
          {text:"If it won't connect, disconnect and reconnect, or restart the VPN client.",},
          {text:"Once connected, confirm the user can reach internal systems and mapped drives that need the VPN.",},
        ]},

      { id:"net-ipconfig", title:"Releasing & Renewing the IP Address",
        lead:"Fix a workstation stuck with a bad or missing network address.",
        steps:[
          {text:"Open <b>Command Prompt</b> (search 'cmd' in the Start menu).",},
          {text:"Type <b>ipconfig /release</b> and press Enter to drop the current address.",},
          {text:"Type <b>ipconfig /renew</b> and press Enter to request a fresh one from the network.", note:"An address starting with 169.254 means the PC didn't get one from the network — this renew step often fixes it."},
          {text:"Run <b>ipconfig</b> to confirm a valid address came back, then test the connection.",},
        ]},
    ]
  },
  hardware: {
    name:"Hardware", icon:"🖥️",
    blurb:"Workstations, peripherals, and the common hardware fixes you handle daily.",
    topics:[
      { id:"hw-setup", title:"New Workstation Setup",
        lead:"Standard checklist for preparing a new desktop or laptop for a user.",
        steps:[
          {text:"Unbox and connect the monitor(s), keyboard, mouse, and network cable (or confirm Wi-Fi).",},
          {text:"Power on and complete the initial <b>Windows setup</b>, then <b>join it to the company domain/network</b>.", note:"Joining the domain is what gives the user their company login and access to shared resources."},
          {text:"Install the required software (EHR, Office, browser, antivirus) and run all <b>Windows updates</b>.",},
          {text:"Sign the user in once to confirm their profile, email, and system access all work, then label the asset with its tag number.",},
        ]},

      { id:"hw-nopower", title:"Computer Won't Turn On",
        lead:"A workstation that shows no signs of life — no lights, no fans, blank screen.",
        steps:[
          {text:"Confirm the <b>power cable</b> is firmly seated at both the wall and the PC, and that the wall outlet works (test with another device).",},
          {text:"Check the power strip or surge protector is switched <b>on</b> and not tripped.",},
          {text:"Press and hold the power button for <b>10 seconds</b> to force a full power cycle, then try again.", note:"This drains residual power and clears many no-boot situations."},
          {text:"If there are lights or fans but no display, treat it as a monitor/display issue instead.",},
          {text:"Still dead — note the asset tag and escalate for hardware repair or swap to a spare unit.",},
        ]},

      { id:"hw-display", title:"Monitor / Display Not Working",
        lead:"The computer is on but the screen is black or shows 'No Signal'.",
        steps:[
          {text:"Check the monitor is <b>powered on</b> and the cable (HDMI/DisplayPort/VGA) is firmly connected at both ends.",},
          {text:"Confirm the monitor is set to the correct <b>input source</b> using its physical buttons.", note:"A monitor set to the wrong input shows 'No Signal' even when everything is plugged in."},
          {text:"Reseat the cable, or swap in a known-good cable to rule out a faulty one.",},
          {text:"Test the monitor on another PC (or another monitor on this PC) to identify whether it's the screen or the computer.",},
        ]},

      { id:"hw-dualmon", title:"Setting Up Dual Monitors",
        lead:"Add a second screen so a user can work across two displays.",
        steps:[
          {text:"Connect the second monitor to a free video port and power it on.",},
          {text:"On the PC, press <b>Windows + P</b> and choose <b>Extend</b>.", note:"'Extend' spreads the desktop across both screens; 'Duplicate' mirrors the same image."},
          {text:"Open <b>Settings → System → Display</b> and drag the monitor boxes so their arrangement matches how they physically sit on the desk.",},
          {text:"Set which screen is the <b>main display</b> and confirm the mouse moves between them naturally.",},
        ]},

      { id:"hw-kbmouse", title:"Keyboard or Mouse Not Working",
        lead:"A wired or wireless keyboard/mouse is unresponsive.",
        steps:[
          {text:"For wired: unplug and replug into a different <b>USB port</b>, ideally one directly on the PC rather than a hub.",},
          {text:"For wireless: replace or recharge the <b>batteries</b> and confirm the USB receiver is plugged in.", note:"A dead battery is the most common cause of a 'broken' wireless device."},
          {text:"Try the device on another PC to confirm whether the device or the port is at fault.",},
          {text:"If it works elsewhere, restart the original PC; if it works nowhere, swap in a replacement.",},
        ]},

      { id:"hw-audio", title:"No Sound / Audio Issues",
        lead:"A user can't hear audio from speakers or headphones.",
        steps:[
          {text:"Check the volume isn't <b>muted</b> and is turned up, both in Windows and on any physical dial.",},
          {text:"Click the speaker icon in the taskbar and confirm the correct <b>output device</b> is selected.", note:"Windows often defaults to the wrong device after plugging in a headset or monitor with speakers."},
          {text:"Reseat the headphone/speaker plug or USB connector.",},
          {text:"Test with another headset to isolate whether it's the device or the PC.",},
        ]},

      { id:"hw-headset", title:"Headset & Microphone Setup",
        lead:"Get a headset working for calls and telehealth sessions.",
        steps:[
          {text:"Plug in the headset and let Windows finish detecting it.",},
          {text:"Open <b>Settings → System → Sound</b> and set the headset as both the <b>output</b> (speaker) and <b>input</b> (microphone) device.",},
          {text:"Use the <b>Test your microphone</b> bar in Sound settings to confirm the mic picks up the voice.", note:"If the bar doesn't move, the wrong input device is selected or the headset has a physical mute switch."},
          {text:"In the calling app (Teams, Zoom, etc.), open its audio settings and select the same headset there too.",},
        ]},

      { id:"hw-webcam", title:"Webcam Not Working",
        lead:"The camera isn't detected or shows a black image in calls.",
        steps:[
          {text:"Check for a physical <b>privacy shutter or switch</b> on the camera and make sure it's open.",},
          {text:"Confirm no other app is using the camera, then close and reopen the calling app.",},
          {text:"Open <b>Settings → Privacy & security → Camera</b> and confirm camera access is turned <b>on</b> for apps.", note:"A locked-down privacy setting is a frequent cause of a 'dead' webcam."},
          {text:"For external webcams, reseat the USB connector or try another port.",},
        ]},

      { id:"hw-usb", title:"USB Device Not Recognized",
        lead:"A flash drive, scanner, or other USB device isn't showing up.",
        steps:[
          {text:"Unplug it and try a <b>different USB port</b>, directly on the PC rather than a hub.",},
          {text:"Test the same device on another computer to confirm it isn't faulty.",},
          {text:"Restart the PC — this re-detects devices and clears many recognition errors.",},
          {text:"If only one port is failing, note it and flag the machine for a port/hardware check.",},
        ]},

      { id:"hw-charging", title:"Laptop Not Charging",
        lead:"A laptop battery isn't charging or the charger seems dead.",
        steps:[
          {text:"Confirm the charger is connected at <b>both ends</b> and the wall outlet works.",},
          {text:"Check the charging port for dust or damage, and make sure the cable's charging light (if any) is on.",},
          {text:"Try a <b>known-good charger</b> of the correct wattage for that model.", note:"An underpowered charger may run the laptop but never actually charge the battery."},
          {text:"If it still won't charge with a good charger, escalate for battery or port repair.",},
        ]},

      { id:"hw-slow", title:"Slow Computer Performance",
        lead:"A workstation has become sluggish or unresponsive.",
        steps:[
          {text:"Save open work and <b>restart</b> the PC — many slowdowns clear with a fresh boot.",},
          {text:"Open <b>Task Manager (Ctrl + Shift + Esc)</b> and check which program is using high CPU, memory, or disk.", note:"Sort by the CPU or Memory column to spot the culprit quickly."},
          {text:"Close unneeded programs and browser tabs, and confirm pending <b>Windows updates</b> aren't running in the background.",},
          {text:"Check free disk space; a nearly full drive slows the whole system. Clear temp files if it's low.",},
        ]},

      { id:"hw-dock", title:"Docking Station Setup",
        lead:"Connect a laptop to a dock for monitors, network, and peripherals.",
        steps:[
          {text:"Plug the dock into power and connect it to the laptop with the correct <b>dock cable</b> (USB-C or Thunderbolt).",},
          {text:"Connect monitors, keyboard, mouse, and the network cable into the <b>dock</b>, not the laptop.",},
          {text:"Confirm the laptop charges through the dock and that the external displays come on.", note:"If displays don't appear, press Windows + P and choose Extend."},
          {text:"Install any dock firmware/driver if the displays or ports behave inconsistently.",},
        ]},
    ]
  },
};

