import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { Repository } from '../Models/Repository';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useGitHub } from '../Hooks/UseGitHub';

export interface ReponsitoryListProps {
  repositories: Repository[]
}

export const RepositoryList: FC<ReponsitoryListProps> = ({ repositories }) => {
  const [selectedRepositoryId, setSelectedRepositoryId] = useState<number>(-1);

  const {
    pullRequests,
    fetchPullRequests,
  } = useGitHub();

  useEffect(() => {
    if (selectedRepositoryId >= 0) {
      const selectedRepository = repositories.find(repo => repo.id === selectedRepositoryId);
      selectedRepository && fetchPullRequests(selectedRepository?.owner, selectedRepository?.name);
    }
  }, [selectedRepositoryId]);

  return (
    <>
      {repositories.map(repo => (
        <Accordion
          key={repo.id}
          expanded={selectedRepositoryId === repo.id}
          onChange={() => setSelectedRepositoryId(repo.id)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ width: '33%', flexShrink: 0 }}>
              {repo.name}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
              Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))
      }
    </>
  )
};
