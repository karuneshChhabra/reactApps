import React, {forwardRef} from "react";
import { Card ,CardContent,Typography,makeStyles } from '@material-ui/core';
import "./Message.css"




const Message =  forwardRef(({message,userName},ref) => {

    
    const isUser = userName.toLowerCase() ===message.userName.toLowerCase();
    

    return(
           <div ref={ref} className={`message__text ${isUser && 'message__user'}`}>
               

                <Card>
            <CardContent>
                <Typography  variant="h5" component="h2" >
                <b>  {!isUser && `${message.userName?message.userName:"Unknown User"}:`} </b>  {message.message}
                </Typography>
                </CardContent>

               </Card>
           </div>
                    
              
                
           
    );    


});

export default Message;