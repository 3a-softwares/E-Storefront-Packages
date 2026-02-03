export default {
  title: 'Home',
  parameters: {
    layout: 'centered',
    docs: {
      page: null
    }
  }
};

export const Welcome = () => (
  <div style={{ textAlign: 'center', marginTop: 40 }}>
    <h1>Welcome to the 3aSoftwares UI Storybook.</h1>
    <p style={{ fontSize: 18, margin: '20px 0' }}>
      Explore the available UI components using the sidebar.
      <br />
      Select a component to see its stories, props, and usage examples.
    </p>
  </div>
);
