# Our instrument: build record

Pair names:

Fork/project link:

Date:

First driver / reviewer:

Roles switched after:

## 1. First request

Write the original one-sentence idea before clarifying it.

> …

## 2. Refined brief

- Input and drawing behavior:
- Pitch mapping and range:
- Duration mapping and maximum playback time:
- Multiple strokes and single taps:
- Play / Stop / Clear:
- Visible feedback:
- Boundaries (what we are not building):

## 3. Core checks

Record actual observations. Use **Pass**, **Fail**, or **Not run**; do not mark a check passed from code inspection alone.

| Check | Expected | Observed before repair | Result | Observed after repair | Revised result |
| --- | --- | --- | --- | --- | --- |
| Drawing | Lines remain visible after release and resize | | Not run | | Not run |
| Pitch | A higher line sounds higher than a lower line | | Not run | | Not run |
| Duration | A longer path plays for longer | | Not run | | Not run |
| Play | Plays the current drawing, including multiple strokes | | Not run | | Not run |
| Stop | Immediately silences playback; retains drawing | | Not run | | Not run |
| Clear | Erases drawing and cancels all current/future sound | | Not run | | Not run |
| Repeated Play | Replaces playback without overlapping voices | | Not run | | Not run |
| Empty canvas / tap | Safe, documented behavior | | Not run | | Not run |

## 4. One creative variation

Chosen variation:

Expected behavior:

Check to run:

Observed behavior and result:

## 5. Peer playtest and targeted repair

Visiting pair:

Browser/device:

Steps they took:

Expected behavior:

Observed behavior (avoid guessing the cause):

Smallest repair requested:

Behaviors that must stay unchanged:

Cause identified:

Files changed:

Same check rerun and actual result:

Unresolved items:

## 6. Shared review

Summarize your brief and evidence in your shared workspace under:

- Required behavior:
- Creative variation:
- Playtest evidence:
- Repair status (include unresolved items):

## 7. Showcase and reflection

- Our one-minute demo:
- One problem and the evidence after repair:
- How did the clarified brief change the result?
- What can both partners explain about the implementation?
- One course or campus project where this workflow could help:
- Next feature or blocker:

Submission: share your fork/project link and this record through the event's check-out instructions.
