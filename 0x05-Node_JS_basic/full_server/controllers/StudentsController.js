import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    const dataPath = process.env.DATABASE_PATH || '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];
        const cmpFxn = (a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase());

        for (const [field, group] of Object.entries(studentGroups).sort(cmpFxn)) {
          responseParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const dataPath = process.env.DATABASE_PATH || '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(400).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(dataPath)
      .then((studentGroups) => {
        if (!studentGroups[major]) {
          response.status(404).send('No students found for the given major');
          return;
        }

        const group = studentGroups[major];
        const responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response.status(500).send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;
