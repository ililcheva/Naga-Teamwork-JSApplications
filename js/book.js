//
//
//
// {
//     "rules":{
//     "users": {
//         "$uid":{
//             ".read":"auth != null && auth.uid == $uid",
//                 ".write":"auth != null && auth.uid == $uid"
//         }
//     },
//     ".read": "auth != null",
//     ".write": "auth != null"
//     }
// }