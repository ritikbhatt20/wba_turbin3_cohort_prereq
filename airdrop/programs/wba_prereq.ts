// // programs/wba_prereq.ts
// export type WbaPrereq = {
//     "version": "0.1.0",
//     "name": "wba_prereq",
//     "instructions": [
//       {
//         "name": "complete",
//         "discriminator": [0, 77, 224, 147, 136, 25, 88, 76],
//         "accounts": [
//           {
//             "name": "signer",
//             "writable": true,
//             "signer": true
//           },
//           {
//             "name": "prereq",
//             "writable": true,
//             "pda": {
//               "seeds": [
//                 {
//                   "kind": "const",
//                   "value": [112, 114, 101, 114, 101, 113]
//                 },
//                 {
//                   "kind": "account",
//                   "path": "signer"
//                 }
//               ]
//             }
//           },
//           {
//             "name": "system_program",
//             "address": "11111111111111111111111111111111"
//           }
//         ],
//         "args": [
//           {
//             "name": "github",
//             "type": "bytes"
//           }
//         ]
//       }
//     ],
//     "accounts": [
//       {
//         "name": "Q2Prereq2024",
//         "discriminator": [210, 203, 168, 103, 251, 233, 204, 6],
//         "type": {
//           "kind": "struct",
//           "fields": [
//             {
//               "name": "github",
//               "type": "bytes"
//             },
//             {
//               "name": "key",
//               "type": "pubkey"
//             }
//           ]
//         }
//       }
//     ],
//     "errors": [
//       {
//         "code": 6000,
//         "name": "InvalidGithubAccount",
//         "msg": "Invalid Github account"
//       }
//     ]
//   };
  
//   export const IDL: WbaPrereq = {
//     "version": "0.1.0",
//     "name": "wba_prereq",
//     "instructions": [
//       {
//         "name": "complete",
//         "discriminator": [0, 77, 224, 147, 136, 25, 88, 76],
//         "accounts": [
//           {
//             "name": "signer",
//             "writable": true,
//             "signer": true
//           },
//           {
//             "name": "prereq",
//             "writable": true,
//             "pda": {
//               "seeds": [
//                 {
//                   "kind": "const",
//                   "value": [112, 114, 101, 114, 101, 113]
//                 },
//                 {
//                   "kind": "account",
//                   "path": "signer"
//                 }
//               ]
//             }
//           },
//           {
//             "name": "system_program",
//             "address": "11111111111111111111111111111111"
//           }
//         ],
//         "args": [
//           {
//             "name": "github",
//             "type": "bytes"
//           }
//         ]
//       }
//     ],
//     "accounts": [
//       {
//         "name": "Q2Prereq2024",
//         "discriminator": [210, 203, 168, 103, 251, 233, 204, 6],
//         "type": {
//           "kind": "struct",
//           "fields": [
//             {
//               "name": "github",
//               "type": "bytes"
//             },
//             {
//               "name": "key",
//               "type": "pubkey"
//             }
//           ]
//         }
//       }
//     ],
//     "errors": [
//       {
//         "code": 6000,
//         "name": "InvalidGithubAccount",
//         "msg": "Invalid Github account"
//       }
//     ]
//   };
  