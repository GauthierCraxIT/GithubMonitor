import { FC } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Repository } from '../Models/Repository';
import { PullRequest } from '../Models/PullRequest';

export interface RepositoryProps {
  expanded: boolean
  onChange: () => void
  repository: Repository
  pullRequests?: PullRequest[]
}

export const RepositoryDetails: FC<RepositoryProps> = ({ expanded, repository, pullRequests = [], onChange }) => {

  console.log(pullRequests);
  return (
    <Accordion
    expanded={expanded}
    onChange={() => onChange()}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography sx={{ width: '33%', flexShrink: 0 }}>
        {repository.name}
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>
        {`${pullRequests.length} Pull requests. ${pullRequests.length > 0 && pullRequests[0].comments?.length} comments. `}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
        Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam.
      </Typography>
    </AccordionDetails>
  </Accordion>
  )
}