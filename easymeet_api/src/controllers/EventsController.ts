import {Request,response,Response} from 'express'
import { calendar_v3, google } from 'googleapis'
const oauth2client = new google.auth.OAuth2(
    '319726701338-okbcnidt6gb689r1tjmp65dq24f2lgmi.apps.googleusercontent.com',
    'VD-nBZp3nL1Q9xemfYPrhdVw'
)
oauth2client.setCredentials(
    {refresh_token : '1//04nF8hyqoGjIeCgYIARAAGAQSNwF-L9Ir7NmHg41VbMRxAZ51UtaLJDqcy4z3tFzjwj5VNh9gfFZLBX2UV7ViG_7G5XYJ2PtwujU'}
);

const calendar = google.calendar({version:'v3',auth: oauth2client});

export default {
    async index (req:Request, res: Response){
        const event = {
            summary: 'teste do easy meet',
            location: 'Rua Safira 345 Camobi Santa Maria',
            description: 'teste do easy meet descricao',
            start:{
                dateTime: new Date().getDay()+1,
                timeZone: 'Brasilia'
            },
            end:{
                dateTime: new Date().getDay()+2,
                timeZone: 'Brasilia'
            },
            colorId: 1,
    
        }
        const calendarlist = await calendar.events.list({calendarId:'primary'})
        // const response = calendar.events.insert({calendarId:'prima'},err=>{})
        return res.status(200).json(calendarlist);
    },
    async create (req:Request,res:Response){
        const {summary, location,description,startdatetime,enddatetime} = req.body;
        
        const event: calendar_v3.Schema$Event = {
            "anyoneCanAddSelf": false,
            "attachments": [],
            "attendees": [],
            "attendeesOmitted": false,
            "colorId": "my_colorId",
            "conferenceData": {},
            "created": "my_created",
            "creator": {},
            "description": description,
            "end": {},
            "endTimeUnspecified": false,
            "etag": "my_etag",
            "extendedProperties": {},
            "gadget": {},
            "guestsCanInviteOthers": false,
            "guestsCanModify": false,
            "guestsCanSeeOtherGuests": false,
            "hangoutLink": "my_hangoutLink",
            "htmlLink": "my_htmlLink",
            "iCalUID": "my_iCalUID",
            "id": "my_id",
            "kind": "my_kind",
            "location": location,
            "locked": false,
            "organizer": {},
            "originalStartTime": {},
            "privateCopy": false,
            "recurrence": [],
            "recurringEventId": "my_recurringEventId",
            "reminders": {},
            "sequence": 0,
            "source": {},
            "start": {date:'2020-11-13'},
            "status": "my_status",
            "summary": summary,
            "transparency": "my_transparency",
            "updated": "my_updated",
            "visibility": "my_visibility"
        }
        const responseCalendarAPI = await calendar.events.insert(
            {
                calendarId:'primary',
                requestBody: event
            }
        )
        return res.status(200).json(responseCalendarAPI);
    }
}