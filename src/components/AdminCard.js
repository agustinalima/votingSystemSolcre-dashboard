import './css/admincard.css';

function AdminCard() {
  return (
    <div className="admin-card">
      <div className="icons-container">
        <img className="info-icon" src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696729818/dashboard/info_outline_w3tz2g.svg" alt="" />
        <img className="noti-icon" src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696729818/dashboard/notifications_none_gberew.svg" alt="" />
        <img className="admin-avatar" src="https://res.cloudinary.com/dlf8flk1o/image/upload/v1696729871/dashboard/Avatar_wxy7jv.png" alt="" />
      </div>

      <div className="text-container">
        <h3>Administrador</h3>
        <p>admin@tiendasound.com</p>
      </div>
    </div>
  );
}

export default AdminCard;
