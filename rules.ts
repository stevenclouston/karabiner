import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open, openG } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
          modifiers: {
            optional: ["any"],
          },
        },
        to: [
          {
            set_variable: {
              name: "hyper",
              value: 1,
            },
          },
        ],
        to_after_key_up: [
          {
            set_variable: {
              name: "hyper",
              value: 0,
            },
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      //      {
      //        type: "basic",
      //        description: "Disable CMD + Tab to force Hyper Key usage",
      //        from: {
      //          key_code: "tab",
      //          modifiers: {
      //            mandatory: ["left_command"],
      //          },
      //        },
      //        to: [
      //          {
      //            key_code: "tab",
      //          },
      //        ],
      //      },
    ],
  },
  ...createHyperSubLayers({
    // Single layers
    // spacebar: open(
    //   "raycast://extensions/raycast/floating-notes/toggle-floating-notes-window"
    // ),
    e: openG("raycast://extensions/raycast/emoji-symbols/search-emoji-symbols"),
    // v: open("raycast://extensions/raycast/clipboard-history/clipboard-history"),
    // Sub layers
    // b = "B"rowse
    b: {},
    // o = "Open" applications
    o: {
      0: open("cursor://file//Users/steven/Dev/authsignal-api-docs"),
      1: open("cursor://file//Users/steven/Dev/authsignal-serverless"),
      2: open("cursor://file//Users/steven/Dev/authsignal-prebuilt-ui"),
      3: open("cursor://file//Users/steven/Dev/authsignal-grandcentral"),
      4: open("cursor://file//Users/steven/Dev/authsignal-server"),
      5: open("cursor://file//Users/steven/Dev/authsignal-infrastructure"),
      grave_accent_and_tilde: open("cursor://file//Users/steven/Dev/scratch"),
      g: app("Github Desktop"),
      c: app("Notion Calendar"),
      v: app("Cursor"),
      s: app("Slack"),
      n: app("Notion"),
      m: app("Mail"),
      f: app("Finder"),
      p: app("Spotify"),
      a: app("Arc"),
      t: app("Terminal"),
      i: app("Insomnia"),
    },

    // q: {
    //   0: open(
    //     "vscode-insiders://file//Users/aaronzhong/dev/authsignal-grandcentral"
    //   ),
    //   9: open(
    //     "vscode-insiders://file//Users/aaronzhong/dev/authsignal-prebuilt-ui"
    //   ),
    //   8: open(
    //     "vscode-insiders://file//Users/aaronzhong/dev/authsignal-serverless"
    //   ),
    //   7: open("vscode-insiders://file//Users/aaronzhong/dev/authsignal-server"),
    //   p: open(
    //     "vscode-insiders://file//Users/aaronzhong/dev/nextjs-passkeys-example"
    //   ),
    // },

    // w = "Window"
    w: {
      spacebar: openG(
        "raycast://extensions/raycast/system/hide-all-apps-except-frontmost"
      ),
      left_arrow: openG(
        "raycast://extensions/raycast/window-management/left-half"
      ),
      right_arrow: openG(
        "raycast://extensions/raycast/window-management/right-half"
      ),
      h: {
        description: "Window: Hide",
        to: [
          {
            key_code: "h",
            modifiers: ["right_command"],
          },
        ],
      },
      j: openG("raycast://extensions/raycast/window-management/left-half"),
      k: openG("raycast://extensions/raycast/window-management/right-half"),
      l: openG(
        "raycast://extensions/raycast/window-management/top-left-quarter"
      ),
      semicolon: openG(
        "raycast://extensions/raycast/window-management/top-right-quarter"
      ),
      comma: openG(
        "raycast://extensions/raycast/window-management/bottom-left-quarter"
      ),
      period: openG(
        "raycast://extensions/raycast/window-management/bottom-right-quarter"
      ),
      f: openG("raycast://extensions/raycast/window-management/maximize"),
      r: openG(
        "raycast://extensions/raycast/window-management/almost-maximize"
      ),
      u: {
        description: "Window: Previous Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control", "right_shift"],
          },
        ],
      },
      i: {
        description: "Window: Next Tab",
        to: [
          {
            key_code: "tab",
            modifiers: ["right_control"],
          },
        ],
      },
      n: {
        description: "Window: Next Window",
        to: [
          {
            key_code: "grave_accent_and_tilde",
            modifiers: ["right_command"],
          },
        ],
      },
      y: {
        description: "Window: Previous Window",
        to: [
          {
            key_code: "grave_accent_and_tilde",
            modifiers: ["right_command", "right_shift"],
          },
        ],
      },
      o: {
        description: "Window: Next Window",
        to: [
          {
            key_code: "grave_accent_and_tilde",
            modifiers: ["right_command"],
          },
        ],
      },
      b: {
        description: "Window: Back",
        to: [
          {
            key_code: "open_bracket",
            modifiers: ["right_command"],
          },
        ],
      },
      // Note: No literal connection. Both f and n are already taken.
      m: {
        description: "Window: Forward",
        to: [
          {
            key_code: "close_bracket",
            modifiers: ["right_command"],
          },
        ],
      },
      d: openG("raycast://extensions/raycast/window-management/next-display"),
      equal_sign: openG(
        "raycast://extensions/raycast/window-management/make-larger"
      ),
      hyphen: openG(
        "raycast://extensions/raycast/window-management/make-smaller"
      ),
    },

    // s = "System"
    // s: {
    //   u: {
    //     to: [
    //       {
    //         key_code: "volume_increment",
    //       },
    //     ],
    //   },
    //   j: {
    //     to: [
    //       {
    //         key_code: "volume_decrement",
    //       },
    //     ],
    //   },
    //   i: {
    //     to: [
    //       {
    //         key_code: "display_brightness_increment",
    //       },
    //     ],
    //   },
    //   k: {
    //     to: [
    //       {
    //         key_code: "display_brightness_decrement",
    //       },
    //     ],
    //   },
    //   l: {
    //     to: [
    //       {
    //         key_code: "q",
    //         modifiers: ["right_control", "right_command"],
    //       },
    //     ],
    //   },
    //   p: {
    //     to: [
    //       {
    //         key_code: "play_or_pause",
    //       },
    //     ],
    //   },
    //   semicolon: {
    //     to: [
    //       {
    //         key_code: "fastforward",
    //       },
    //     ],
    //   },
    //   e: {
    //     to: [
    //       {
    //         // Emoji picker
    //         key_code: "spacebar",
    //         modifiers: ["right_control", "right_command"],
    //       },
    //     ],
    //   },
    //   // Turn on Elgato KeyLight
    //   y: {
    //     to: [
    //       {
    //         shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
    //       },
    //     ],
    //   },
    //   h: {
    //     to: [
    //       {
    //         shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
    //       },
    //     ],
    //   },
    //   // "D"o not disturb toggle
    //   d: open(`raycast://extensions/yakitrak/do-not-disturb/toggle`),
    // },

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    // v: {
    //   h: {
    //     to: [{ key_code: "left_arrow" }],
    //   },
    //   j: {
    //     to: [{ key_code: "down_arrow" }],
    //   },
    //   k: {
    //     to: [{ key_code: "up_arrow" }],
    //   },
    //   l: {
    //     to: [{ key_code: "right_arrow" }],
    //   },
    //   // Magicmove via homerow.app
    //   m: {
    //     to: [{ key_code: "f", modifiers: ["right_control"] }],
    //   },
    //   // Scroll mode via homerow.app
    //   s: {
    //     to: [{ key_code: "j", modifiers: ["right_control"] }],
    //   },
    //   d: {
    //     to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
    //   },
    //   u: {
    //     to: [{ key_code: "page_down" }],
    //   },
    //   i: {
    //     to: [{ key_code: "page_up" }],
    //   },
    // },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    // c: {
    //   p: {
    //     to: [{ key_code: "play_or_pause" }],
    //   },
    //   n: {
    //     to: [{ key_code: "fastforward" }],
    //   },
    //   b: {
    //     to: [{ key_code: "rewind" }],
    //   },
    // },

    // r = "Raycast"
    r: {
      s: openG("raycast://extensions/raycast/screenshots/search-screenshots"),
      n: openG("raycast://script-commands/dismiss-notifications"),
      c: openG("raycast://extensions/raycast/system/open-camera"),
      p: openG("raycast://extensions/raycast/raycast/confetti"),
      1: openG(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-1"
      ),
      2: openG(
        "raycast://extensions/VladCuciureanu/toothpick/connect-favorite-device-2"
      ),
      spacebar: openG("raycast://extensions/raycast/snippets/search-snippets"),
      comma: openG(
        "raycast://extensions/raycast/floating-notes/toggle-floating-notes-window"
      ),
    },
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
