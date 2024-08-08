
const generateAbout = () => {
    let div = document.createElement('div');
    div.className = 'page';

    // About Us title
    let aboutTitle = document.createElement('h1');
    aboutTitle.textContent = 'About Us';
    div.appendChild(aboutTitle);

    // Restaurant history
    let historySection = document.createElement('div');
    historySection.className = 'history-section';

    let historyTitle = document.createElement('h2');
    historyTitle.textContent = 'Our History';
    historySection.appendChild(historyTitle);

    let historyContent = document.createElement('p');
    historyContent.textContent = 'Gourmet Delights was founded in 2005 by Chef John Doe, with the vision of creating a unique dining experience that combines fine dining with the comfort of home. Over the years, we have grown into a beloved spot for food enthusiasts.';
    historySection.appendChild(historyContent);

    div.appendChild(historySection);

    // Mission section
    let missionSection = document.createElement('div');
    missionSection.className = 'mission-section';

    let missionTitle = document.createElement('h2');
    missionTitle.textContent = 'Our Mission';
    missionSection.appendChild(missionTitle);

    let missionContent = document.createElement('p');
    missionContent.textContent = 'Our mission is to provide an unforgettable dining experience through exceptional service, a warm and inviting atmosphere, and the highest quality cuisine. We strive to make every visit to Gourmet Delights a memorable one.';
    missionSection.appendChild(missionContent);

    div.appendChild(missionSection);

    // Team section
    let teamSection = document.createElement('div');
    teamSection.className = 'team-section';

    let teamTitle = document.createElement('h2');
    teamTitle.textContent = 'Meet the Team';
    teamSection.appendChild(teamTitle);

    // Sample team members
    let teamMembers = [
        { name: 'John Doe', role: 'Head Chef' },
        { name: 'Jane Smith', role: 'General Manager' },
        { name: 'Emily Johnson', role: 'Pastry Chef' }
    ];

    teamMembers.forEach(member => {
        let teamMember = document.createElement('div');
        teamMember.className = 'team-member';

        let memberName = document.createElement('span');
        memberName.className = 'member-name';
        memberName.textContent = member.name;

        let memberRole = document.createElement('span');
        memberRole.className = 'member-role';
        memberRole.textContent = member.role;

        teamMember.appendChild(memberName);
        teamMember.appendChild(memberRole);
        teamSection.appendChild(teamMember);
    });

    div.appendChild(teamSection);

    return div;
};

export { generateAbout };