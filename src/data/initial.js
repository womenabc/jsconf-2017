export default {
  settings: {
    gain: 1,
    bpm: 100
  },
  tracks: {
    master: {
      name: 'master',
      id: 'master',
      gain: 1,
      filters: ['239786428374t928374628934728347']
    },
    secondChannel: {
      name: 'master2',
      id: 'secondChannel',
      gain: 1,
      filters: []
    }
  },
  filters: {
    '239786428374t928374628934728347': {
      type: 'lowpass'
    }
  },
  pads: {
    pad1: {
      "id": "pad1",
      "clips": [
        [
          "63dd984a-c6b8-4d5c-bcd1-4cdab36055f3",
          "f954f9b6-4055-4533-a3d7-416ee1441bba",
          "473ef6f9-16e8-48e1-a809-54693a17a509",
          "a18d0496-dd87-4a7c-ac95-4d76b4728595",
          null,
          null,
          null,
          null
        ],
        [
          "2316526c-ec07-4153-a47a-d831b2aaf18e",
          "762e04a0-b651-4560-bad1-31011b7b27e5",
          "ccda5e09-62b6-40af-be94-e10077bf6e59",
          "e39f4804-4a40-42f7-bac5-eade1ba47b96",
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null
        ]
      ],
      "selectedClipId": "e39f4804-4a40-42f7-bac5-eade1ba47b96"
    },
    pad2: {
      id: 'pad2',
      clips: [
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [
          'e39f4804-4a40-42f7-bac5-eade1ba47b910',
          'e39f4804-4a40-42f7-bac5-eade1ba47b911',
          null, null, null, null, null, null
        ],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null],
        [null,null,null,null,null,null,null,null]
      ],
      selectedClipId: '2316526c-ec07-4153-a47a-d831b2aaf18e'
    }
  },
  clips: {
    "2316526c-ec07-4153-a47a-d831b2aaf18e": {
      "id": "2316526c-ec07-4153-a47a-d831b2aaf18e",
      "type": "audiosample",
      "behavior": "single",
      "file": "2a86e9ee-b409-4e2b-91e0-bcc051ec21685",
      "track": "master",
      "gain": 1,
      "loop": false
    },
    "762e04a0-b651-4560-bad1-31011b7b27e5": {
      "id": "762e04a0-b651-4560-bad1-31011b7b27e5",
      "type": "audiosample",
      "behavior": "single",
      "file": "2a86e9ee-b409-4e2b-91e0-bcc051ec21686",
      "track": "master",
      "gain": 1,
      "loop": false
    },
    "63dd984a-c6b8-4d5c-bcd1-4cdab36055f3": {
      "gain": 1,
      "behavior": "single",
      "file": "2a86e9ee-b409-4e2b-91e0-bcc051ec21681",
      "loop": false,
      "track": "master",
      "id": "63dd984a-c6b8-4d5c-bcd1-4cdab36055f3",
      "type": "audiosample"
    },
    "f954f9b6-4055-4533-a3d7-416ee1441bba": {
      "gain": 1,
      "behavior": "single",
      "file": "2a86e9ee-b409-4e2b-91e0-bcc051ec21682",
      "loop": false,
      "track": "master",
      "id": "f954f9b6-4055-4533-a3d7-416ee1441bba",
      "type": "audiosample"
    },
    "473ef6f9-16e8-48e1-a809-54693a17a509": {
      "gain": 1,
      "behavior": "single",
      "file": "2a86e9ee-b409-4e2b-91e0-bcc051ec21683",
      "loop": false,
      "track": "master",
      "id": "473ef6f9-16e8-48e1-a809-54693a17a509",
      "type": "audiosample"
    },
    "a18d0496-dd87-4a7c-ac95-4d76b4728595": {
      "gain": 1,
      "behavior": "single",
      "file": "2a86e9ee-b409-4e2b-91e0-bcc051ec21684",
      "loop": false,
      "track": "master",
      "id": "a18d0496-dd87-4a7c-ac95-4d76b4728595",
      "type": "audiosample"
    },
    "ccda5e09-62b6-40af-be94-e10077bf6e59": {
      "gain": 1,
      "behavior": "single",
      "file": "2a86e9ee-b409-4e2b-91e0-bcc051ec21687",
      "loop": false,
      "track": "master",
      "id": "ccda5e09-62b6-40af-be94-e10077bf6e59",
      "type": "audiosample"
    },
    "e39f4804-4a40-42f7-bac5-eade1ba47b96": {
      "gain": 1,
      "behavior": "single",
      "file": "2a86e9ee-b409-4e2b-91e0-bcc051ec21688",
      "loop": false,
      "track": "master",
      "id": "e39f4804-4a40-42f7-bac5-eade1ba47b96",
      "type": "audiosample"
    },
    "e39f4804-4a40-42f7-bac5-eade1ba47b910": {
      "gain": 1,
      "behavior": "single",
      "file": "2a86e9ee-b409-4e2b-91e0-bcc051ec2168",
      "loop": false,
      "track": "master",
      "id": "e39f4804-4a40-42f7-bac5-eade1ba47b910",
      "type": "audiosample"
    },
    "e39f4804-4a40-42f7-bac5-eade1ba47b911": {
      "gain": 1,
      "behavior": "single",
      "file": "36c1262c-608c-41db-a12c-7a2fad9d4c14",
      "loop": false,
      "track": "master",
      "id": "e39f4804-4a40-42f7-bac5-eade1ba47b911",
      "type": "audiosample"
    },
  },
  files: {
    '2a86e9ee-b409-4e2b-91e0-bcc051ec2168': {
      location: 'mysound.mp3',
      name: 'mysound'
    },
    '36c1262c-608c-41db-a12c-7a2fad9d4c14': {
      location: 'mysound2.mp3',
      name: 'mysound2'
    },
    '2a86e9ee-b409-4e2b-91e0-bcc051ec21681': {
      location: '1.mp3',
      name: 'git1'
    },
    '2a86e9ee-b409-4e2b-91e0-bcc051ec21682': {
      location: '2.mp3',
      name: 'git2'
    },
    '2a86e9ee-b409-4e2b-91e0-bcc051ec21683': {
      location: '3.mp3',
      name: 'kick'
    },
    '2a86e9ee-b409-4e2b-91e0-bcc051ec21684': {
      location: '4.mp3',
      name: 'clap'
    },
    '2a86e9ee-b409-4e2b-91e0-bcc051ec21685': {
      location: '5.mp3',
      name: 'bell1'
    },
    '2a86e9ee-b409-4e2b-91e0-bcc051ec21686': {
      location: '6.mp3',
      name: 'bell2'
    },
    '2a86e9ee-b409-4e2b-91e0-bcc051ec21687': {
      location: '7.mp3',
      name: 'bell3'
    },
    '2a86e9ee-b409-4e2b-91e0-bcc051ec21688': {
      location: '8.mp3',
      name: 'bell4'
    }
  },
  scheduler: {
    // clipId : fileId
    scheduled: {},
    // clipId : audioNode
    playing: {},
    // clipId : audioNode
    toStop: {}
  }
};
