// components/CountryDialog.tsx
"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CountryDetails } from "@/types/countries";

type CountryDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  countryName: string;
  countryDetails?: CountryDetails;
};

const CountryDialog = ({
  isOpen,
  onClose,
  countryName,
  countryDetails,
}: CountryDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-xl">
        <DialogHeader>
          <DialogTitle>{countryName}</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {countryDetails ? (
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col">
                <span className="font-medium">M49 Code:</span>
                <span>{countryDetails["M49 Code"]}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">ISO-alpha2 Code:</span>
                <span>{countryDetails["ISO-alpha2 Code"]}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">ISO-alpha3 Code:</span>
                <span>{countryDetails["ISO-alpha3 Code"]}</span>
              </div>

              {countryDetails["Least Developed Countries (LDC)"] && (
                <div className="flex flex-col">
                  <span className="font-medium">
                    Least Developed Countries (LDC):
                  </span>
                  <span>
                    {countryDetails["Least Developed Countries (LDC)"]}
                  </span>
                </div>
              )}

              {countryDetails["Land Locked Developing Countries (LLDC)"] && (
                <div className="flex flex-col">
                  <span className="font-medium">
                    Land Locked Developing Countries (LLDC):
                  </span>
                  <span>
                    {countryDetails["Land Locked Developing Countries (LLDC)"]}
                  </span>
                </div>
              )}

              {countryDetails["Small Island Developing States (SIDS)"] && (
                <div className="flex flex-col">
                  <span className="font-medium">
                    Small Island Developing States (SIDS):
                  </span>
                  <span>
                    {countryDetails["Small Island Developing States (SIDS)"]}
                  </span>
                </div>
              )}
            </div>
          ) : (
            <DialogDescription>
              No information is available for this country.
            </DialogDescription>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CountryDialog;
