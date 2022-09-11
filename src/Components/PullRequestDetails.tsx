import { Accordion, AccordionDetails, AccordionSummary, Link, Typography } from "@mui/material";
import { FC } from "react";
import { PullRequest } from "../Models/PullRequest";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface PullRequestProps {
    pullRequest: PullRequest
}

export const PullRequestDetails: FC<PullRequestProps> = (props) => {
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            {props.pullRequest.title}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {`State: ${props.pullRequest.state}`}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {`Locked: ${props.pullRequest.locked}`}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            <>URL:</>
            <Link href={`${props.pullRequest.url}`}>{props.pullRequest.url}</Link>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            {props.pullRequest.comments?.map(comment => (
                <>
                {comment.body}
                <br />
                </>
            ))}
        </AccordionDetails>
      </Accordion>
    )
};