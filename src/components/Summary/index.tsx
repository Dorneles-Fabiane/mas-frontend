import { useEffect, useState } from 'react';
import { GoFile, GoNote, GoGraph } from 'react-icons/go';
import api from '../../services/api';

import { Container } from './styles';

interface Activity {
  id: string;
  name: string;
  grade: number;
  activity_date: Date;
}

interface CourseUnit {
  id: string;
  name: string;
  description: string;
}

export function Summary() {

  const [activities, setActivities] = useState<Activity[]>([]);
  const [courseUnits, setCourseUnits] = useState<CourseUnit[]>([]);

  useEffect(() => { 
    api.get('/activity')
      .then(response => setActivities(response.data))
  }, []);

  useEffect(() => {
    api.get('/courseunit')
      .then(response => setCourseUnits(response.data))
  }, []);

  return (
    <Container>
      <div>
        <header>
          <p>Curricular Units</p>

          <GoFile size={40} />
        </header>
        
        <strong>
            {courseUnits.length}
        </strong>
      </div>
      <div>
        <header>
          <p>Activities</p>

          <GoNote size={40} />
        </header>

        <strong>
            {activities.length}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Overall Average</p>
          <GoGraph size={40} />
        </header>
        
        <strong>
          {Number(activities.reduce((average, activity) => {
            return average + Number(activity.grade)
          }, 0)/activities.length).toFixed(2)}
        </strong>
      </div>
    </Container>
  );
}