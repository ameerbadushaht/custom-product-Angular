import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  refreshToken: any;

  ngOnInit(): void {
  
    this.refreshToken=localStorage.getItem("refreshtoken");
  }

  logout(): void {  
    Swal.fire({
      title: "Logout!",
      text: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Logout!",
          text: "Logged out successfully.",
          icon: "success"
        });
        localStorage.removeItem("accestoken");
        localStorage.removeItem("refreshtoken");
        // localStorage.removeItem("user");
        window.location.reload();
      }
    });
  
  }
}
