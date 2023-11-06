import Header from '../components/Header';

const title = "Contact Me";

export default function ContactPage() {
  return (
    <div className="p-5">
      <Header title={title} />
      <form name="contact" method="POST" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" name="name" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" name="email" className="form-control" id="email" />
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" style={{ height: '100px' }}></textarea>
          <label htmlFor="message">Comments</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
