"use client";

import React, { useState } from "react";

//third-party
import {
    faTimes,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//types
import { OfferResponse } from "@/lib/types/offers";
import { useTranslations } from "next-intl";

const CouponModal = ({
    isOpen,
    onClose,
    coupons,
    setOfferId
}: {
    isOpen: boolean;
    onClose: () => void;
    setOfferId: (id: string) => void;
    coupons?: OfferResponse;
}) => {
    const [code, setCode] = useState("");
    const [expandedId, setExpandedId] = useState<string | null>(null);
    const t = useTranslations('HomePage');

    const handleApplyOffer = (id: string) => {
        setOfferId(id);
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white w-50 h-[900px] rounded-3xl p-5 shadow-xl animate-slide-up">
                {/* Header */}
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h2 className="text-lg font-bold text-gray-800">{t('cart.apply_coupon')}</h2>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-gray-100"
                    >
                        <FontAwesomeIcon icon={faTimes} className="w-5 h-5 text-gray-600" />
                    </button>
                </div>

                {/* Coupon Input */}
                <div className="flex items-center bg-gray-100 rounded-full px-3 py-2 mb-4">
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="Enter Coupon Code"
                        className="flex-1 bg-transparent outline-none text-sm px-2"
                    />
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow">
                        {t('cart.apply')}
                    </button>
                </div>

                {/* Info Alert */}
                {/* <div className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs px-3 py-2 rounded-lg mb-5">
                    <FontAwesomeIcon
                        icon={faExclamationTriangle}
                        className="text-yellow-600"
                    />
                    Items in your cart may not be eligible for coupons
                </div> */}

                {/* Coupon List */}
                <div className="space-y-4 overflow-y-auto h-[700px]">
                    {coupons?.offer?.map((coupon) => {
                        return (
                            <div
                                key={coupon?.id}
                                className="flex bg-white border rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
                            >
                                {/* Left Discount Banner */}
                                <div className="bg-gradient-to-b from-emerald-400 to-teal-600 text-white font-bold text-xs flex items-center justify-center px-2 w-14 rotate-180 [writing-mode:vertical-rl]">
                                    {coupon.type === "PERCENTAGE" ? `${coupon?.discountValue}%` : `₹${coupon?.discountValue}`}
                                </div>

                                {/* Right Content */}
                                <div className="flex-1 p-4 flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="font-bold text-gray-900 uppercase text-sm">
                                                {coupon?.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 mt-1">{coupon?.description}</p>

                                            {/* + MORE Button */}
                                            <button
                                                onClick={() => setExpandedId(expandedId === coupon.id ? null : coupon.id)}
                                                className="flex items-center gap-1 text-xs font-semibold text-blue-600 mt-1 hover:underline"
                                            >
                                                {expandedId === coupon.id ? `${t('cart.hide_terms')}` : `+ ${t('cart.more')}`}
                                                <FontAwesomeIcon
                                                    icon={faChevronDown}
                                                    className={`w-3 h-3 transition-transform ${expandedId === coupon.id ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                        </div>
                                        <button className="ml-3 bg-blue-50 text-blue-600 hover:bg-blue-100 text-xs font-bold px-3 py-1.5 rounded-full" onClick={() => handleApplyOffer(coupon.id)}>
                                            {t('cart.apply')}
                                        </button>
                                    </div>

                                    {/* Terms & Conditions (collapsible) */}
                                    {expandedId === coupon.id && (
                                        <ul className="list-disc pl-5 text-xs text-gray-600 mt-3 space-y-1">
                                            <li>{t('cart.coupon_valid_once')}</li>
                                            <li>{t('cart.min_order_value')} ₹{coupon?.minOrderValue} {t('cart.its_important')}</li>
                                            <li>{t('cart.tax_delivery_not_discounted')}</li>
                                            <li>{t('cart.cannot_combine_offers')}</li>
                                            <li>{t('cart.company_offer_withdraw')}</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CouponModal;
